import { useWPImage } from "../hooks/useWPImage";
import ImageGallery from "react-image-gallery";

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
export function WPCarousel({ mainImage, otherImages, youtubeLinks }: Props) {
  const ytids: string[] = youtubeLinks.reduce((prev, url) => {
    const id = extractVideoId(url);
    id && prev.push(id);
    return prev;
  }, [] as string[]);
  const images = [
    {
      original: useWPImage(mainImage, "large"),
      thumbnail: useWPImage(mainImage, "thumbnail"),
      fullscreen: useWPImage(mainImage, "full"),
    },
    ...otherImages.map((im) => ({
      original: useWPImage(im, "large"),
      thumbnail: useWPImage(im, "thumbnail"),
      fullscreen: useWPImage(im, "full"),
    })),
    ...ytids.map((id) => ({
      thumbnail: `https://img.youtube.com/vi/${id}/0.jpg`,
      original: `https://img.youtube.com/vi/${id}/0.jpg`,
      id,
      renderItem: ytIframe,
    })),
  ];
  return (
    <ImageGallery
      items={images}
      lazyLoad
      showPlayButton={false}
      useBrowserFullscreen={false}
    />
  );
}
