import useSWR from "swr";
import { wpFetch } from "../utils/wpFetch";

export function useWPImage(id: string, size: string) {
  if (!id || id.length === 0) {
    return "fuck";
  }
  const { data } = useSWR(`/v2/media/${id}`, wpFetch);
  if (data) {
    return data.media_details.sizes[size].source_url;
  } else {
    return "loadingimage here";
  }
}
