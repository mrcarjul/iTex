import React, {useEffect, useState} from 'react';

// Core
import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Input,
  Left,
  Right,
  Row,
  Col,
  Spinner,
  Title,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Personalized components
import Item from '../components/Item';

// Personalized Hooks
import {useDebouncedCallBack, usePrevious} from '../hooks';

// Themes
import {colors} from '../themes';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {requestEmployeeData, setEmployeeData} from '../redux/actions/employee';

function TopContainer({employeeId, onChangeText, onClearData, onPress}) {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.topText} success>
        Enter your employee code:
      </Text>
      <Row style={styles.alignCenter}>
        <Col size={3}>
          <Input value={employeeId} style={styles.input} {...{onChangeText}} />
        </Col>
        <Col>
          <Button
            iconRight
            danger
            full
            style={styles.margin}
            onPress={onClearData}>
            <Text style={styles.buttonText}>Clear</Text>
            <AntDesign name="close" size={25} color={colors.white} />
          </Button>
        </Col>
      </Row>
      <View style={styles.centerContents}>
        {employeeId != '' ? (
          <Text style={styles.greetText}>Hello!, employee {employeeId}</Text>
        ) : null}
      </View>
      <Button {...{onPress}} style={styles.button} block disabled={fetching}>
        <Text style={styles.buttonText} small primary>
          Check Data
        </Text>
      </Button>
    </View>
  );
}

function Home() {
  const [employeeId, setEmployeeId] = useState('');
  const {fetching, payload} = useSelector((state) => state.employee);
  const prevFetching = usePrevious(fetching);
  const dispatch = useDispatch();

  useEffect(() => {
    if (prevFetching && !fetching && !payload) {
      Alert.alert('Error', 'No data found');
    }
  }, [prevFetching, fetching, payload]);

  const onChangeText = (text) => {
    setEmployeeId(text.replace(/\D/g, ''));
  };

  const onRequestEmployeeData = () => {
    if (employeeId === '') {
      Alert.alert('Error', 'Please add an employee code');
      return;
    }
    dispatch(requestEmployeeData(employeeId));
  };

  const [onPress] = useDebouncedCallBack(onRequestEmployeeData, 100);

  const onClearData = () => {
    setEmployeeId('');
    dispatch(setEmployeeData(null));
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
        <TopContainer {...{employeeId, onChangeText, onClearData, onPress}} />
        {fetching ? (
          <Spinner color={colors.blue} />
        ) : (
          payload?.length > 0 &&
          payload.map((item) => (
            <Item key={item.registryInternalKey} {...item} />
          ))
        )}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
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
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
  },
  margin: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
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
