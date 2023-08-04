"use client"
import MainTopFilter from "./components/MainTopFilter";
import MainTabs from "./components/MainTabs";
import TableData from "./components/TableData";

export default function Home() {
  return (
    <>
      <MainTopFilter/>
      <MainTabs tableOne={<TableData />} tableTwo={<TableData />}/>
    </>
  )
}
