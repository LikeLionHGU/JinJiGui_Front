import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function ShowList() {
  const [cards, setCards] = useState([]);
  const [groupId, setGroupId] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [memberId, setMemberId] = useState("");

  const getCards = async () => {
    const response = await fetch(
      `https://one3th-front-api.onrender.com/grouping/groupList`
    );
    const json = await response.json();
    setCards(json);
  };

  // const getMemberId = async () => {
  //   const response2 = await fetch(
  //     `https://one3th-front-api.onrender.com/grouping/login`
  //   );
  //   const json2 = await response2.json();
  //   setMemberId(json2);
  // };

  useEffect(() => {
    getCards();
    // getMemberId();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const openApplyModal = (_id) => {
    setModalOpen(true);
    setGroupId(_id);
  };

  return <div>Loading</div>;
}

export default ShowList;
