import React, {useState} from 'react';

// Core
import {StyleSheet, Text, View} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Input,
  Left,
  Right,
  Spinner,
  Title,
} from 'native-base';

// Personalized components
import Item from '../components/Item';

// Themes
import {colors} from '../themes';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {requestEmployeeData} from '../redux/actions/employee';

function Home() {
  const [employeeId, setEmployeeId] = useState('');
  const {fetching, payload} = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const onChangeText = (text) => {
    setEmployeeId(text);
  };

  const onPress = () => {
    dispatch(requestEmployeeData(employeeId));
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
          <Button {...{onPress}} style={styles.button} block>
            <Text style={styles.buttonText} small primary>
              Check Data
            </Text>
          </Button>
        </View>
        <View style={styles.bottomContainer}>
          {fetching ? (
            <Spinner color={colors.blue} />
          ) : (
            payload?.length > 0 &&
            payload.map((item) => (
              <Item key={item.registryInternalKey} {...item} />
            ))
          )}
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
    flex: 1,
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
    color: colors.gray,
    fontSize: 16,
  },
});

export default Home;
