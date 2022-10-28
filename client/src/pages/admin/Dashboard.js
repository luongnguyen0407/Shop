import { CARD_ADMIN } from "assets/Const";
import CardTotal from "components/common/admin/CardTotal";
import CharMonth from "components/common/admin/CharMonth";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4 ">
      <div className="grid grid-cols-4 gap-x-2">
        {CARD_ADMIN.map((item, index) => (
          <CardTotal key={index} data={item} />
        ))}
      </div>
      <CharMonth />
    </div>
  );
};

export default Dashboard;
