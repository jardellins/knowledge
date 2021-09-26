import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

import "./styles.css";

type Props = {
  link: string;
};

const ArrowGoBack = ({ link }: Props) => {
  return (
    <div className="back">
      <Link to={link}>
        <ArrowBack />
      </Link>
    </div>
  );
};

export default ArrowGoBack;
