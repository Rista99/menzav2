import {ScrollView, StyleSheet, Image, View} from 'react-native';
import React, {useState} from 'react';
import {List, useTheme} from 'react-native-paper';

const LunchScreen = ({days, setCurrentDay, setCurrentMeal, showDialog}) => {
  const {colors} = useTheme();

  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <ScrollView>
        <List.Section>
          {days.map(d => {
            return (
              <List.Accordion
                title={d.date.toDate().toDateString()}
                key={d.id}
                style={{backgroundColor: colors.accent, paddingVertical: 10}}
                theme={{dark: 0}}>
                {d.meals
                  .filter(m => m.type === 2)
                  .map(m => {
                    return (
                      <View key={m.id} style={{}}>
                        <List.Item
                          titleNumberOfLines={3}
                          left={() => (
                            <Image
                              style={{width: 50, height: 50}}
                              source={require('../images/lunch.png')}
                            />
                          )}
                          title={m.name}
                          onPress={() => {
                            setCurrentMeal(m);
                            setCurrentDay(d);
                            showDialog();
                          }}
                          style={{
                            backgroundColor: colors.surface,
                            marginVertical: 5,
                            borderRadius: 20,
                            marginHorizontal: 15,
                          }}
                          titleStyle={{
                            color: colors.onSurface,
                            textAlign: 'center',
                          }}></List.Item>
                      </View>
                    );
                  })}
              </List.Accordion>
            );
          })}
        </List.Section>
      </ScrollView>
    </>
  );
};

export default LunchScreen;

const styles = StyleSheet.create({});
