import useSWR from "swr";
import { buildPathWithWPQuery, wpFetch } from "../utils/wpFetch";

export function useWPImage(id: string, size: string, initialData?: any) {
  if (!id || id.length === 0) {
    return "fuck";
  }
  const { data } = useSWR(
    buildPathWithWPQuery(`/v2/media/${id}`, {
      _fields: "media_details",
    }),
    wpFetch,
    {
      initialData,
    }
  );
  if (data) {
    return data.media_details.sizes[size].source_url;
  } else {
    return "loadingimage here";
  }
}
