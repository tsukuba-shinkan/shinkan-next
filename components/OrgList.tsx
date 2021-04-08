import {
  PlasmicOrgList,
  DefaultOrgListProps,
} from "./plasmic/shinkan_next/PlasmicOrgList";

import { createContext, useContext, useState } from "react";

const listCtx = createContext(false);
export function useOrgList() {
  const list = useContext(listCtx);
  return {
    list,
  };
}

interface OrgListProps extends DefaultOrgListProps {
  children: React.ReactNode;
}

function OrgList({ children }: OrgListProps) {
  const [list, setList] = useState(false);
  return (
    <listCtx.Provider value={list}>
      <PlasmicOrgList
        list={list}
        toggleBtn={{
          onClick() {
            setList((l) => !l);
          },
        }}
      >
        {children}
      </PlasmicOrgList>
    </listCtx.Provider>
  );
}

export default OrgList;
