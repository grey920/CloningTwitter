import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Table from "./Table";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody.js";
// MaterialUI 제공 버튼
import Button from "../Button/Button";
import './usersStyle.scss';


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);


const UserList = [
  {
    "id": "1",
    "name": "정겨운",
    "birthday": "1992.01.18",
    "email": "aaa@aaa.com",
    "gender": "여"
  },
  {
    "id": "2",
    "name": "정다와",
    "birthday": "1992.01.18",
    "email": "aaa@aaa.com",
    "gender": "여"
  },
  {
    "id": "3",
    "name": "정중기",
    "birthday": "1992.01.18",
    "email": "aaa@aaa.com",
    "gender": "남"
  },
  {
    "id": "4",
    "name": "이미자",
    "birthday": "1992.01.18",
    "email": "aaa@aaa.com",
    "gender": "여"
  },
  {
    "id": "5",
    "name": "정함박",
    "birthday": "1992.01.18",
    "email": "aaa@aaa.com",
    "gender": "여"
  },
  {
    "id": "6",
    "name": "홍길동",
    "birthday": "1992.01.18",
    "email": "aaa@aaa.com",
    "gender": "남"
  },
];


export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="twitty">
            <h2 className={classes.cardTitleWhite}>
              회원 리스트
            </h2>
            <p className={classes.cardCategoryWhite}>
              User lists for Twitty
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={["ID", "이름", "생년월일", "이메일", "성별"]}
              tableData={[
                ["1", "정겨운", "1992.01.18", "aaa@aaa.com", "여"],
                ["2", "정다와", "1992.01.18", "aaa@aaa.com", "여"],
                ["3", "정중기", "1992.01.18", "aaa@aaa.com", "남"],
                // [
                //   "4",
                //   "이미자",
                //   "1992.01.18",
                //   "aaa@aaa.com",
                //   "여"
                // ],
                // [
                //   "5",
                //   "정함박",
                //   "1992.01.18",
                //   "aaa@aaa.com",
                //   "여"
                // ]
              ]}
            />
          </CardBody>
        </Card>
        <Button color="info" round href="/">메인으로</Button>
      </GridItem>
    </GridContainer>
  );
}
