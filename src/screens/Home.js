import React, {useState} from 'react';

// Core
import {Text, View, StyleSheet} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Input,
  Left,
  Right,
  Title,
} from 'native-base';

// Themes
import {colors} from '../themes';


function Home() {
  const [employeeId, setEmployeeId] = useState('');

  const onChangeText = (text) => {
    setEmployeeId(text);
  };

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>iTex</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <View style={styles.topContainer}>
          <Text style={styles.topText} success>
            Enter your employee code:
          </Text>
          <Input value={employeeId} style={styles.input} {...{onChangeText}} />
          <View style={styles.centerContents}>
            {employeeId != '' ? (
              <Text style={styles.greetText}>Hello!, {employeeId}</Text>
            ) : null}
          </View>
          <Button onPress={() => {}} style={styles.button} block>
            <Text style={styles.buttonText} small primary>
              Check Data
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
  },
  centerContents: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetText: {
    color: colors.lightGray,
  },
  input: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  topContainer: {
    flex: 1,
  },
  topText: {
    fontSize: 16,
    color: colors.gray,
  },
});

export default Home;
