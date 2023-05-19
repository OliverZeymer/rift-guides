"use client";
import Image from "next/image";
import SearchField from "./SearchField";
import { Tooltip } from "react-tippy";
import { useEffect } from "react";

const roles = [
  {
    name: "Assassin",
    icon: "/assets/icons/roles/assassin.webp",
  },
  {
    name: "Fighter",
    icon: "/assets/icons/roles/fighter.webp",
  },
  {
    name: "Mage",
    icon: "/assets/icons/roles/mage.webp",
  },
  {
    name: "Marksman",
    icon: "/assets/icons/roles/marksman.webp",
  },
  {
    name: "Support",

    icon: "/assets/icons/roles/support.webp",
  },
  {
    name: "Tank",
    icon: "/assets/icons/roles/tank.webp",
  },
];
export default function ChampionFiltering({ champions, setFilteredChampions, searchValue, setSearchValue, roleFilter, setRoleFilter }) {
  useEffect(() => {
    if (champions && searchValue !== "") setFilteredChampions(champions.filter((champion) => champion.name.toLowerCase().includes(searchValue.toLowerCase())));
  }, [searchValue]);

  return (
    <div className="mb-8">
      <SearchField searchValue={searchValue} setSearchValue={setSearchValue} placeholder="Search for a champion" setRoleFilter={setRoleFilter} />
      <div className="flex flex-wrap justify-center gap-3">
        {roles.map((role, index) => (
          <Tooltip
            key={role.name}
            animation="shift"
            interactive
            title={"<div class='p-0.5 bg-bg box-content rounded'>" + "<p class='text-base font-semibold text-white capitalize'>" + role.name + "</p>" + "</div>"}
            position="bottom">
            <button
              key={index}
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                roleFilter === role.name ? "bg-primary-400" : "bg-primary-700"
              } transition-colors duration-300 ease-in-out hover:bg-primary-400`}
              onClick={() => {
                setSearchValue("");
                if (roleFilter === role.name) {
                  setRoleFilter("All");
                  setFilteredChampions(champions);
                } else {
                  setRoleFilter(role.name);
                  setFilteredChampions(champions.filter((champion) => champion.tags.includes(role.name)));
                }
              }}>
              <Image src={role.icon} alt={`${role.name} icon`} width={40} height={40} />
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
