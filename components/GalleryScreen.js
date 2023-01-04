import { useState } from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { Menu, Button } from 'react-native-paper';

export const GalleryScreen = (props) => {
  return(
    <ScrollView>
      <View style={styles.layout}>
        <MiniMenu />
      </View>
      <ImageList />
    </ScrollView>
  );
}

const ImageList = () => {
  const imgs = getImages();

  const imgComponents = imgs.map((step, move) => {
    return (
      <Image 
        style={[styles.img, { width: 100, height: 100 }]}
        source={{ uri: step.src }}
        key={move}
      />
    )
  });

  const imgMatrix = Array(Math.floor(imgComponents.length / 3) + 1).fill(null);
  for (let row = 0; row < imgMatrix.length; row++) {
    const imgRow = Array(3).fill(null);
    
    for (let col = 0; col < 3; col++) {
      imgRow[col] = imgComponents[(row * 3) + col] ? 
                      imgComponents[(row * 3) + col] : 
                      <View style={styles.img} key={(row * 3) + col} />;
    }

    imgMatrix[row] = <View style={styles.imgRowLayout} key={row}>{imgRow}</View>;
  }

  return (
    <View>
      {imgMatrix}
    </View>
  );
}

function getImages() {
  /* RETURN FORMAT: [{
    src: str
  }...]
  */
  return Array(50).fill({ src: 'https://picsum.photos/100/100' })
  /*[
    {
      src: 'https://picsum.photos/100/100',
    }...
  ];*/
}

const MiniMenu = () => {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("All");

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
        anchor={<Button mode="outlined" onPress={openMenu} style={styles.menu}>{filter}</Button>}
      >
        <Menu.Item onPress={() => {selectFilter('All')}} title='All' />
        <Menu.Item onPress={() => {selectFilter('School')}} title='School' />
        <Menu.Item onPress={() => {selectFilter('Club 1')}} title='Club 1' />
        <Menu.Item onPress={() => {selectFilter('Club 2')}} title='Club 2' />
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: "center",
  },
  imgRowLayout: { 
    flex: 1, 
    flexDirection: "row", 
  },
  menuContainer: {
    flex: 1,
    flexDirection: "row",
  },
  menu: {
    flex: 1,
    width: 200,
  },
  img: {
    flex: 1,
    margin: 5,
  },
});
