"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
    const searcParams =  useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const activeFilter = searcParams.get("capacity") ?? "all"

    function handleFilter(filter){
      const params = new URLSearchParams(searcParams)
      params.set("capacity", filter)
      router.replace(`${pathname}?${params.toString()}`, {scroll:false})
    }
    return (
        <div className="border border-primary-800 flex flex-wrap rounded-lg overflow-hidden">
          <Button
            filter="all"
            handleFilter={handleFilter}
            activeFilter={activeFilter}
          >
            All cabins
          </Button>
          <Button
            filter="small"
            handleFilter={handleFilter}
            activeFilter={activeFilter}
          >
            2&mdash;3 guests
          </Button>
          <Button
            filter="medium"
            handleFilter={handleFilter}
            activeFilter={activeFilter}
          >
            4&mdash;7 guests
          </Button>
          <Button
            filter="large"
            handleFilter={handleFilter}
            activeFilter={activeFilter}
          >
            8&mdash;12 guests
          </Button>                
        </div>
    )
}
function Button({ filter, handleFilter, activeFilter, children }) {
    return (
      <button
        className={`px-3 sm:px-4 lg:px-5 py-2 text-sm sm:text-base hover:bg-primary-700 transition-colors ${
          filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
        }`}
        onClick={() => handleFilter(filter)}
      >
        {children}
      </button>
    );
  }

export default Filter
