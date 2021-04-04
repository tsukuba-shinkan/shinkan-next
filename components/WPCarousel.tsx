import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import { buildPathWithWPQuery, wpFetch } from "../utils/wpFetch";

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
  )?.media_details.sizes;
export function WPCarousel({ mainImage, otherImages, youtubeLinks }: Props) {
  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const ytids: string[] = youtubeLinks.reduce((prev, url) => {
        const id = extractVideoId(url);
        id && prev.push(id);
        return prev;
      }, [] as string[]);

      const mainDetail = await getDetail(mainImage);
      const otherDetail = await Promise.all(
        otherImages.map(async (im) => await getDetail(im))
      );
      setItems([
        {
          original:
            mainDetail?.large?.source_url || mainDetail?.medium?.source_url,
          thumbnail: mainDetail?.thumbnail?.source_url,
          fullscreen: mainDetail?.full?.source_url,
        },
        ...otherDetail.map((im) => ({
          original: im?.large?.source_url || mainDetail?.medium?.source_url,
          thumbnail: im?.thumbnail?.source_url,
          fullscreen: im?.full?.source_url,
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
