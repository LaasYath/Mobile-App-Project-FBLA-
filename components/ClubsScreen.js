import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Divider, Button, Menu } from 'react-native-paper';

export const ClubsScreen = () => (
  <ScrollView style={styles.layout}>
    <Title style={styles.title}>Your Clubs</Title>
    <Divider bold={true} horizontalInset={true} />
    <UserClubCards />

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
  /* implement getting all user clubs */
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
      clubTitle: 'Club 2',
      clubDescription: 'Club 2 Description',
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
