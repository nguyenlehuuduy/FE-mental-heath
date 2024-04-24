import { callGetRequest } from "./apiService";

interface FeatureForResponse {
  id: string;
  name: string;
  thumbnailFileName: string;
  url: string;
}

export type FeatureForCard = {
  id: string;
  name: string;
  thumbnail_file_name: string;
  url: string;
}


export async function getListHotFeature(): Promise<Array<FeatureForCard> | undefined> {
  const res = await callGetRequest(`/feature`);
  if (res.status === 200) {
    const data: Array<FeatureForResponse> = res.response;
    const listFeature: Array<FeatureForCard> = [];
    const listValidShowing = data.slice(0, 3);
    for (const item of listValidShowing) {
      listFeature.push({
        thumbnail_file_name: item.thumbnailFileName,
        id: item.id,
        name: item.name,
        url: item.url
      })
    }
    return listFeature;
  }
}