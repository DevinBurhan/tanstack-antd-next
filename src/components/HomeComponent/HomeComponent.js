"use client";
import { useDummyJsonHook } from "@/state/Dummy/dummy.hook";
import { Button } from "antd";
import { useState } from "react";

const HomeComponent = () => {
  const { data: dummyData, isLoading } = useDummyJsonHook();
  console.log("🚀 ~ HomeComponent ~ dummyData:", dummyData);
  const [load, setLoad] = useState(false);

  return (
    <>
      <Button loading={load}>Home</Button>
      <Button onClick={() => setLoad(!load)}>Loading</Button>
    </>
  );
};

export default HomeComponent;
