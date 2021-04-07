import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import { buildPathWithWPQuery, wpFetch } from "../utils/wpFetch";
import { rewriteToCdn } from "../utils/rewriteCdn";

type Props = {
  mainImage: string;
  otherImages: string[];
  youtubeLinks: string[];
};
function ytIframe({ id }: any) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allowFullScreen
      width="100%"
      height="300px"
    ></iframe>
  );
}
function extractVideoId(url: string) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : null;
}

const getDetail = async (id: string) =>
  (
    await wpFetch(
      buildPathWithWPQuery(`/v2/media/${id}`, {
        _fields: "media_details",
      })
    )
  )?.media_details?.sizes;
export function WPCarousel({ mainImage, otherImages, youtubeLinks }: Props) {
  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const ytids: string[] = youtubeLinks.reduce((prev, url) => {
        const id = extractVideoId(url);
        id && prev.push(id);
        return prev;
      }, [] as string[]);

      const mainDetail = mainImage && (await getDetail(mainImage));
      const mainImageObj = mainDetail
        ? [
            {
              original: rewriteToCdn(
                mainDetail?.large?.source_url || mainDetail?.medium?.source_url
              ),
              thumbnail: rewriteToCdn(mainDetail?.thumbnail?.source_url),
              fullscreen: rewriteToCdn(mainDetail?.full?.source_url),
            },
          ]
        : [];
      const otherDetail = await Promise.all(
        otherImages.map(async (im) => await getDetail(im))
      );
      setItems([
        ...mainImageObj,
        ...otherDetail.map((im) => ({
          original: rewriteToCdn(
            im?.large?.source_url || im?.medium?.source_url
          ),
          thumbnail: rewriteToCdn(im?.thumbnail?.source_url),
          fullscreen: rewriteToCdn(im?.full?.source_url),
        })),
        ...ytids.map((id) => ({
          thumbnail: `https://img.youtube.com/vi/${id}/0.jpg`,
          original: `https://img.youtube.com/vi/${id}/0.jpg`,
          id,
          renderItem: ytIframe,
        })),
      ]);
    })();
  }, [mainImage, otherImages, youtubeLinks]);
  if (items.length) {
    return (
      <ImageGallery
        items={items}
        lazyLoad
        showPlayButton={false}
        useBrowserFullscreen={false}
      />
    );
  }
  return <></>;
}
