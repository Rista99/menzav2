import {ScrollView, StyleSheet, Image, View} from 'react-native';
import React, {useState} from 'react';
import {List, useTheme} from 'react-native-paper';

const DinnerScreen = ({days, setCurrentDay, setCurrentMeal, showDialog}) => {
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
                style={{backgroundColor: colors.accent, paddingVertical: 10}}>
                {d.meals
                  .filter(m => m.type === 3)
                  .map(m => {
                    return (
                      <View key={m.mealID}>
                        <List.Item
                          titleNumberOfLines={3}
                          left={() => (
                            <Image
                              style={{
                                minWidth: 60,
                                minHeight: 60,
                                maxWidth: 70,
                                maxHeight: 70,
                              }}
                              source={require('../images/dinner.png')}
                            />
                          )}
                          title={m.posno ? `Posno: ${m.name}` : m.name}
                          onPress={() => {
                            setCurrentMeal(m);
                            setCurrentDay(d);
                            showDialog();
                          }}
                          style={
                            m.posno
                              ? [styles.listItem, {backgroundColor: '#00ff66'}]
                              : [
                                  styles.listItem,
                                  {backgroundColor: colors.surface},
                                ]
                          }
                          titleStyle={{color: colors.onSurface}}></List.Item>
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

export default DinnerScreen;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 15,
    padding: 1,
  },
});
