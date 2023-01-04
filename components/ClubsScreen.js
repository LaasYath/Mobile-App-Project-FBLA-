import { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Card, Title, Paragraph, Divider, Button, Menu } from 'react-native-paper';

//Initialize Parse/Connect to Back4App db
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initialize sdk
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('hd8SQBtMaTjacNWKfJ1rRWnZCAml1Rquec1S9xCV', 'Qn7JG5jASG6A45G5acmsKMCCgJwJx1Kd7Shc6VPq');
Parse.serverURL = 'https://parseapi.back4app.com/';

// must get clubs query in async (lets me use await keyword)
// async function getClubs(user) {
//   const userObject = new Parse.Query('Student');
//   const clubObject = new Parse.Query('Clubs');

//   try {
//     // here you put the objectId that you want to update
//     const studentQuery = await userObject.get(user);
//     try {
//       const student = await studentQuery.save();
//       let clubsList = student.get("clubs"); //array of clubs
//       let cardData = clubsList;
//       // for (let i = 0; i < clubsList.length; i++) {
//       //   const clubQuery = await clubObject.get(clubsList[i]);
//       //   const club = await clubQuery.save();
//       //   // cardData += [{
//       //   //     clubTitle: club.get("name"),
//       //   //     clubDescription: club.get("descrip"),
//       //   //     clubCover: club.get("cover"),
//       //   //   }]
//       //   cardData += club.get("name") +"\n";
//       // }      
//     } catch (error) {
//       console.error('Error while getting clubs list ', error);
//     }
//   } catch (error) {
//     console.error('Error while retrieving object ', error);
//   }

//   return cardData;
// }

export const ClubsScreen = () => (
  <ScrollView style={styles.layout}>
    <Title style={styles.title}>Your Clubs</Title>
    <Divider bold={true} horizontalInset={true} />
    <UserClubCards user={global.id} />

    <View style={styles.allClubsHeader}>
      <View style={{ flex: 2 }}><Title style={styles.title}>Browse</Title></View>
      <View style={{ flex: 1 }}><MiniMenu /></View>
    </View>
    <Divider bold={true} horizontalInset={true} />
    <AllClubCards />
  </ScrollView>
);

/*
<UserClubCards user={
      /* Once auth fully implemented, will need to have this actually reference their ID */
      /*"Example User"
    /*}/>
*/

const UserClubCards = (props) => {
  const user = props.user;
  const cardsData = getUserClubCards(user);

  // const cards = cardsData.map((step, move) => {
  //   return (
  //     <View key={move}>
  //       <ClubCard clubData={step} />
  //     </View>
  //   )
  // });

  // return (
  //   <View>{cardsData}</View>
  // );
}

const AllClubCards = () => {
  const cardsData = getAllClubCards();

  const cards = cardsData.map((step, move) => {
    return (
      <View key={move}>
        <ClubCard clubData={step} />
      </View>
    )
  });

  return (
    <View>{cards}</View>
  );
}

function getUserClubCards(user) {
  // let cardData;

  // cardData = [
  //   {
  //     clubTitle: 'Club 1',
  //     clubDescription: 'Club 1 Description',
  //     clubCover: 'https://picsum.photos/500/200',
  //   },
  //   {
  //     clubTitle: 'Club 3',
  //     clubDescription: 'Club 3 Description',
  //     clubCover: 'https://picsum.photos/500/200',
  //   },
  //   {
  //     clubTitle: 'Club 5',
  //     clubDescription: 'Club 5 Description',
  //     clubCover: 'https://picsum.photos/500/200',
  //   },
  // ];

  // return cardData;

  async function clubInfo() {
    console.log(global.id);
    const query = new Parse.Query('Student');
    const object = await query.get(global.id);
    const response = await object.save();
    const clubList = response.get("clubs");

    const query2 = new Parse.Query("Club");

    let cardData = [];

    clubList.forEach(getClubs);
    for (let i = 0; i < clubList.length; i++) {
      
    }
    async function getClubs(value, index, array) {
      const object2 = await query2.get(value);
      const response2 = await object2.save();
      let clubData = new Map();
      clubData.set("clubTitle", response2.get("name"));
      clubData.set("clubDescription", response2.get("descrip"));
      clubData.set("clubCover", response2.get("cover"));
      cardData.push(clubData);
      console.log(cardData);
    }
    return cardData;
  }

  return clubInfo();
}

function getAllClubCards() {
  /* implement getting all clubs */
  /* RETURN FORMAT: [{
    clubTitle: str,
    clubDescription: str,
    clubCover: str,
  }...]
  (clubCover - can be URL or path (aka URI))
  */  
  let cardData;

  cardData = [
    {
      clubTitle: 'Club 1',
      clubDescription: 'Club 1 Description',
      clubCover: 'https://picsum.photos/500/200',
    },
    {
      clubTitle: 'Club 2',
      clubDescription: 'Club 2 Description',
      clubCover: 'https://picsum.photos/500/200',
    },
    {
      clubTitle: 'Club 3',
      clubDescription: 'Club 3 Description',
      clubCover: 'https://picsum.photos/500/200',
    },
    {
      clubTitle: 'Club 4',
      clubDescription: 'Club 4 Description',
      clubCover: 'https://picsum.photos/500/200',
    },
    {
      clubTitle: 'Club 5',
      clubDescription: 'Club 5 Description',
      clubCover: 'https://picsum.photos/500/200',
    },
  ];

  return cardData;
}

const ClubCard = (props) => {
  const clubInfo = props.clubData;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{clubInfo.clubTitle}</Title>
        <Paragraph>{clubInfo.clubDescription}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: clubInfo.clubCover }}/>
    </Card>
  );
}

const MiniMenu = () => {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("Filter...");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectFilter = (filter) => {
    setFilter(filter);
    closeMenu();
  }

  return (
    <View style={styles.menuContainer}>
      <Menu 
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button mode="outlined" onPress={openMenu}>{filter}</Button>}
      >
        <Menu.Item onPress={() => {selectFilter('Filter 1')}} title='Filter 1' />
        <Menu.Item onPress={() => {selectFilter('Filter 2')}} title='Filter 2' />
        <Menu.Item onPress={() => {selectFilter('Filter 3')}} title='Filter 3' />
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#fff",
  },
  allClubsHeader: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 3,
  },
  title: {
    marginLeft: 10,
  },
  menuContainer: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  card: {
    margin: 5,
  },
});
