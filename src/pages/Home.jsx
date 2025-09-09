import React from "react";
import { Form, useActionData } from "react-router-dom";
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
      <Form method="post">
        <input type="text" name="title" />
        <input type="text" name="age" />
        <button className="btn">button</button>
      </Form>
    </div>
  );
}

export default Home;
