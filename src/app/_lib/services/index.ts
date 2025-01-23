import { env } from "@/env";
import type { carouselDataType, sildeDataType, footerDataType } from "@/app/_lib/types";

export async function getCarouselData(): Promise<carouselDataType[]> {
  try {
    const response = await fetch(`${env.NEXT_PUBLIC_CLIENT_API_URL}/carousels`);
    const data: carouselDataType[] = (await response.json()) as carouselDataType[];
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getSlideData(): Promise<sildeDataType[]> {
  try {
    const response = await fetch(`${env.NEXT_PUBLIC_CLIENT_API_URL}/slides`);
    const data: sildeDataType[] = (await response.json()) as sildeDataType[];
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getFooterData(): Promise<footerDataType[]> {
  try {
    const response = await fetch(`${env.NEXT_PUBLIC_CLIENT_API_URL}/footers`);
    const data: footerDataType[] = (await response.json()) as footerDataType[];
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
