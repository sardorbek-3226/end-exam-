import React from "react";
import { Form, useActionData } from "react-router-dom";
import Filter from "../components/Filter";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Footer from "../components/footer/Footer";
const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntriese([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = request.data.data;
    const meta = request.data.data;
  };

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const age = formData.get("age");
  return { title, age };
};

function Home() {
  const actionData = useActionData();
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
}

export default Home;
