"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useModelStore } from "@/stores/useModelStrore";
import { useVisibilityStore } from "@/stores/useVisibilityStore";
import { lowerBase, upperBase } from "@/utils/getDentalFiles";
import { collapse, matchesSearch, matchesType } from "@/utils/helper";
import { useRef, useState } from "react";

export default function LeftSidebar() {
  const [keyword, setKeyword] = useState("");
  const [keywordFile, setKeywordFile] = useState("");
  const [toggleFilter, setToggleFilter] = useState(false);
  const [selectedTab, setSelecetdTab] = useState("models");

  const [filter, setFilter] = useState<string[]>(["base", "alveolar", "teeth"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addFiles, models, removeFile } = useModelStore();

  const debouncedKeyword = useDebounce(keyword, 300);
  const debouncedKeywordFile = useDebounce(keywordFile, 300);

  const { toggle, hidden } = useVisibilityStore();

  const isHidden = (file: string) => hidden.has(file);

  const filterUpperBase = upperBase.filter((file) => {
    return matchesSearch(file, debouncedKeyword) && matchesType(file, filter);
  });

  const filterLowerBase = lowerBase.filter((file) => {
    return matchesSearch(file, debouncedKeyword) && matchesType(file, filter);
  });

  const filterFiles: any = models.filter((file) => {
    return matchesSearch(file.name, debouncedKeywordFile);
  });

  const handleHideAllFiltered = () => {
    filterUpperBase.forEach((file) => toggle(file));
    filterLowerBase.forEach((file) => toggle(file));
  };

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  const handleClickFilter = (name: string) => {
    setFilter((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };

  const isActive = (name: string) => filter.includes(name);

  const handleChangeTab = (name: string) => {
    setSelecetdTab(name);
  };

  return (
    <div className="h-screen p-2 absolute left-0 top-0 z-10">
      <div className="bg-white px-4 py-6 w-[260px] rounded-md">
        <input
          ref={inputRef}
          hidden
          multiple
          type="file"
          accept=".stl,.glb"
          onChange={(e) => {
            if (!e.target.files) return;

            addFiles(Array.from(e.target.files), () => {
              setSelecetdTab("uploads");
            });
          }}
        />
        <div
          onClick={() => inputRef.current?.click()}
          className="w-full h-28 group hover:border-indigo-500 flex transition-all cursor-pointer flex-col py-6 px-4 items-center justify-center border-4 border-slate-100 rounded-lg border-dashed"
        >
          <button className="text-indigo-500 text-2xl">
            <i className="iconoir-upload" />
          </button>
          <span className="font-semibold text-slate-800 text-sm">
            Upload STL/GLB
          </span>
          <span className="text-xs text-slate-600 text-center">
            Drag &amp; drop files or click to browse
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center mt-6">
          <div className="flex items-center w-full">
            <div
              className={`flex items-center w-full justify-center group ${selectedTab === "models" ? "border-indigo-500 border-b-2" : "border-slate-100 border-b"} py-2 cursor-pointer hover:border-indigo-500 hover:border-b-2`}
              onClick={() => handleChangeTab("models")}
            >
              <span
                className={`${selectedTab === "models" ? "text-indigo-500" : "text-slate-600"}  text-sm font-semibold group-hover:text-indigo-500`}
              >
                Models
              </span>
            </div>
            <div
              className={`flex items-center w-full justify-center group ${selectedTab === "uploads" ? "border-indigo-500 border-b-2" : "border-slate-100 border-b"} py-2 cursor-pointer hover:border-indigo-500 hover:border-b-2`}
              onClick={() => handleChangeTab("uploads")}
            >
              <span
                className={`${selectedTab === "uploads" ? "text-indigo-500" : "text-slate-600"}  text-sm font-semibold group-hover:text-indigo-500`}
              >
                Uploaded
              </span>
            </div>
          </div>
          {selectedTab === "models" ? (
            <>
              <div className="flex flex-col gap-2 mt-2 h-[calc(100vh_-_300px)] overflow-y-auto">
                <div className="flex items-center justify-between gap-3 sticky top-0 left-0 bg-white z-10 pb-2">
                  <div className="flex items-center px-2 py-1 border-2 border-slate-200 rounded-md gap-2 focus-within:border-indigo-500">
                    <i className="iconoir-search text-slate-600" />
                    <input
                      type="text"
                      placeholder="Search models..."
                      className="focus:outline-none text-sm text-slate-600 w-full"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleToggleFilter}
                    className="border border-slate-200 group rounded-md leading-0 p-1.5 cursor-pointer hover:border-indigo-500"
                  >
                    <i className="iconoir-filter text-slate-600 group-hover:text-indigo-500" />
                  </button>
                </div>
                {toggleFilter && (
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={() => handleClickFilter("base")}
                      className="flex items-center gap-2 text-slate-600 text-sm cursor-pointer"
                    >
                      <div
                        className={`w-3.5 h-3.5  border rounded-sm flex items-center justify-center ${isActive("base") ? "bg-indigo-500 text-white border-indigo-500" : "border-slate-400 text-slate-600"}`}
                      >
                        {isActive("base") ? (
                          <i className="iconoir-check" />
                        ) : null}
                      </div>
                      Base
                    </div>
                    <div
                      onClick={() => handleClickFilter("alveolar")}
                      className="flex items-center gap-2 text-slate-600 text-sm cursor-pointer"
                    >
                      <div
                        className={`w-3.5 h-3.5  border rounded-sm flex items-center justify-center ${isActive("alveolar") ? "bg-indigo-500 text-white border-indigo-500" : "border-slate-400 text-slate-600"}`}
                      >
                        {isActive("alveolar") ? (
                          <i className="iconoir-check" />
                        ) : null}
                      </div>
                      Alveolar
                    </div>
                    <div
                      onClick={() => handleClickFilter("teeth")}
                      className="flex items-center gap-2 text-slate-600 text-sm cursor-pointer"
                    >
                      <div
                        className={`w-3.5 h-3.5  border rounded-sm flex items-center justify-center ${isActive("teeth") ? "bg-indigo-500 text-white border-indigo-500" : "border-slate-400 text-slate-600"}`}
                      >
                        {isActive("teeth") ? (
                          <i className="iconoir-check" />
                        ) : null}
                      </div>
                      Teeth
                    </div>
                  </div>
                )}
                <div className="border border-slate-100 p-2 rounded-md">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-500 uppercase text-xs font-semibold">
                      Upper Jaw
                    </span>
                    <span className="px-1.5 py-1 bg-slate-200 text-slate-600 text-xs rounded-lg font-semibold">
                      {filterUpperBase.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {collapse(filterUpperBase, 3, 2).map((upper) => {
                      return upper === "..." ? (
                        <span className="text-slate-600 text-sm" key="0">
                          ...
                        </span>
                      ) : (
                        <div
                          className="flex justify-between items-center py-2"
                          key={upper}
                        >
                          <div className="flex items-center gap-2">
                            <i className="iconoir-cube text-slate-600" />
                            <span className="text-slate-600 text-xs">
                              {upper}
                            </span>
                          </div>
                          <span
                            onClick={() => toggle(upper)}
                            className="cursor-pointer px-1.5 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md leading-0"
                          >
                            {isHidden(upper) ? (
                              <i className="iconoir-eye-closed" />
                            ) : (
                              <i className="iconoir-eye" />
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center py-2 mt-6">
                    <span className="text-slate-500 uppercase text-xs font-semibold">
                      Lower Jaw
                    </span>
                    <span className="px-1.5 py-1 bg-slate-200 text-slate-600 text-xs rounded-lg font-semibold">
                      {filterLowerBase.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {collapse(filterLowerBase, 3, 2).map((lower) => {
                      return lower === "..." ? (
                        <span className="text-slate-600 text-sm" key={0}>
                          ...
                        </span>
                      ) : (
                        <div
                          className="flex justify-between items-center py-2"
                          key={lower}
                        >
                          <div className="flex items-center gap-2">
                            <i className="iconoir-cube text-slate-600" />
                            <span className="text-slate-600 text-xs">
                              {lower}
                            </span>
                          </div>
                          <span
                            onClick={() => toggle(lower)}
                            className="cursor-pointer px-1.5 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md leading-0"
                          >
                            {isHidden(lower) ? (
                              <i className="iconoir-eye-closed" />
                            ) : (
                              <i className="iconoir-eye" />
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="bg-white py-2 w-full">
                <button
                  onClick={handleHideAllFiltered}
                  className="bg-slate-100 py-3 cursor-pointer rounded-lg border border-slate-200 justify-center w-full flex items-center leading-0 text-slate-500 text-sm gap-3 font-medium"
                >
                  <i className="iconoir-eye-closed"></i>
                  Toggle Hide Filter
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2 mt-2 h-[calc(100vh_-_300px)] overflow-y-auto">
              <div className="flex items-center justify-between gap-3 sticky top-0 left-0 bg-white z-10 pb-2">
                <div className="flex items-center px-2 py-1 border-2 border-slate-200 rounded-md gap-2 focus-within:border-indigo-500">
                  <i className="iconoir-search text-slate-600" />
                  <input
                    type="text"
                    placeholder="Search file..."
                    className="focus:outline-none text-sm text-slate-600 w-full"
                    value={keywordFile}
                    onChange={(e) => setKeywordFile(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 w-full">
                {filterFiles.map(({ name }: any) => {
                  return name === "..." ? (
                    <span className="text-slate-600 text-sm" key="0">
                      ...
                    </span>
                  ) : (
                    <div
                      className="flex justify-between items-center py-2"
                      key={name}
                    >
                      <div className="flex items-center gap-2">
                        <i className="iconoir-cube text-slate-600" />
                        <span className="text-slate-600 text-xs">{name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          onClick={() => toggle(name)}
                          className="cursor-pointer px-1.5 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md leading-0"
                        >
                          {isHidden(name) ? (
                            <i className="iconoir-eye-closed" />
                          ) : (
                            <i className="iconoir-eye" />
                          )}
                        </span>
                        <span
                          onClick={() => removeFile(name)}
                          className="cursor-pointer px-1.5 py-1 bg-red-50 text-red-600 text-xs rounded-md leading-0"
                        >
                          <i className="iconoir-trash" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
