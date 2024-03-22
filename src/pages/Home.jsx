import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import CommentsModal from '../components/CommentsModal';

const LogoImg = require('../assets/icons/bottomtabs/Logo.png');
const heartImg = require('../assets/icons/bottomtabs/heart.png');
const comentImg = require('../assets/icons/bottomtabs/coment.png');
const more = require('../assets/icons/bottomtabs/more.png');

const {width} = Dimensions.get('window');

const dummy_story = [
  {
    id: 1,
    name: 'BONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: false,
  },
  {
    id: 2,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: false,
  },
  {
    id: 3,
    name: 'Leemingu',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: true,
  },
  {
    id: 4,
    name: 'park_cha',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: true,
  },
  {
    id: 5,
    name: 'pig0321',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: true,
  },
  {
    id: 6,
    name: 'Pro_yagada',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: true,
  },
];

const dummy_feed = [
  {
    id: 1,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
    ],
    contents: '내 마음...받아줘',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 2,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
    ],
    contents: '내 마음...받아줘',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 3,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
    ],
    contents: '내 마음...받아줘',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 4,
    name: 'Jeongtaeyoung_5812',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/1/400/400',
    ],
    contents: '내 마음...받아줘',
    like: 37,
    likeUsers: [1, 2, 3],
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const renderStory = ({item, index}) => {
    return (
      <TouchableOpacity
        style={index === 0 ? {marginHorizontal: 16} : {marginRight: 16}}>
        <Image source={{uri: item.profileImg}} style={
        item.isOpen ? styles.storyProfileImg : [styles.storyProfileImg,{borderWidth: 2, borderColor: '#2A85FF', borderRadius: 26}]} />
        <Text
          numberOfLines={1}
          style={{
            maxWidth: 52,
            fontSize: 13,
            fontWeight: '400',
            lineHeight: 16.22,
            color: '#4F4F4F',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderFeed = ({item, index}) => {
    return (
      <View style={{paddingVertical: 24}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginHorizontal: 16, marginBottom: 8}}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Image
              source={{uri: item.profileImg}}
              style={{width: 32, height: 32}}
            />
            <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 19.97}}>{item.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={more} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
        <Image source={{uri: item.feedImg[0]}} style={{width, height: width, marginBottom: 8}} resizeMode='contain' />
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginBottom: 32}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <TouchableOpacity>
              <Image source={heartImg} style={{width: 32, height: 32}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Image source={comentImg} style={{width: 32, height: 32}} />
            </TouchableOpacity>
          </View>
          <Text>외 37명이 좋아합니다.</Text>
        </View>
        <View style={{marginHorizontal: 16, gap: 4}}>
          <Text>{item.name}</Text>
          <Text style={{fontWeight: '400', color: '#4F4F4F'}}>{item.contents}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1, backgroundColor: '#FFF', marginBottom: 32}}>
        <FlatList
          data={dummy_feed}
          renderItem={renderFeed}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View>
              <View style={styles.homeHeaderWarraper}>
                <Image source={LogoImg} style={{width: 94, height: 32}} />
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <TouchableOpacity>
                    <Image source={heartImg} style={{width: 32, height: 32}} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={comentImg} style={{width: 32, height: 32}} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <FlatList
                  data={dummy_story}
                  renderItem={renderStory}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  removeClippedSubviews
                />
              </View>
            </View>
          )}
        />
        <CommentsModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeHeaderContainer: {
    flex: 1,
  },
  homeHeaderWarraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  storyProfileImg: {
    width: 52,
    height: 52,
    marginBottom: 2,
  },
});

export default Home;
