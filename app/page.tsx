import FirstSection from "@/app/first-section";
import SecondSection from "@/app/second-section";
import prisma from "@/prisma/client";

const getFoodItems = async () => {
  const data = Promise.all([
    await prisma.food.findMany(),
    await prisma.resturant.findMany(),
  ]);
  return data;
};

export default async function Home() {
  const [foods, resturants] = await getFoodItems();

  return (
    <>
      <FirstSection foodItems={foods} />
      <SecondSection resturants={resturants} />
    </>
  );
}
