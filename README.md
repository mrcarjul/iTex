# iTex

React Native Code Challenge

For the very first requirement im going to add my coments down here:

- Fix the app, please include notes about the problems. Here is the link: https://snack.expo.io/@moyolvera/simple-code-challenge

In this snack we have a class component thas has a few details whitin

1. The first one that gets noticed is that we have a state object declared with 2 props usernameInputValue and response, the issue here is that this response state is actually never used so to solve this it will just get removed and if get even more strict about we notice the naming of the prop to usernameInputValue as it is kind of representative to where it is used and for what, after reading further documentation we notice that it's not going to store an user but an id from an employee so it could be switched to something like employeeIdInputValue or just employeeId(but this is just me being me)

```javascript
state = {
  employeeId: '',
};
```

2. After this we can see that a ui dependencie is used Native Base, the structure to use this dependencie is ok, but in the Header as stated by their docs it receives 3 children Left, Body and Right and we only have Body declared, to fix this one just add the missing components to it

```javascript
<Header>
  <Left />
  <Body>
    <Title>iTex</Title>
  </Body>
  <Right />
</Header>
```

3. Then we get to the Content and here we have a validation with and && operator which ends up renderending text outside of our Text component and this is a very bad issue that can be the cause of many crashes on the application one way to fix this is to actually fix the validation so now we have this:

```javascript
{
  this.state.employeeId != '' ? (
    <Text>Hello!, {this.state.employeeId}</Text>
  ) : null;
}
```

4. Now we have an input that has it's value setted to our employeeId state but it doesn't make use of the onChangeText prop so this ends up in our state never updating and as a consequence our input doesn't update by itself so to solve this we add our onChangeText function

```javascript
onChangeText = (employeeId) => {
  this.setState({employeeId});
};

<Input value={this.state.employeeId} onChangeText={this.onChangeText} />;
```

5. The button Text says update and in mock it says it should be Check Data, also there is no onPress functionality i assume that this because in this sample we have the hardcoded data already so i'm just going continue.

```javascript
<Button>
  <Text style={styles.buttonText}>Check Data</Text>
</Button>
```

6. Then we have two Text component one with a label Date: that doesn't render anything else and another that has a response that exploring other the file where is imported we notice that it is an array and we can't render an array as a text so to solve this it's is actually needed to map throught our array and render the corresponding will be something like this

```javascript
          {response.map(
            ({
              id,
              date,
              type,
              status,
              shouldDisplayStatus,
              shouldDisplay,
              registryInternalKey,
            }) =>
              shouldDisplay ? (
                <View key={registryInternalKey} style={styles.itemRow}>
                  <View style={styles.centerContents}>
                    <Text style={styles.itemText}>{id}</Text>
                  </View>
                  <View>
                    <StyledText title="Date" content={date}/>
                    {shouldDisplayStatus && <StyledText title="Status" content={status}/>}
                  </View>
                  <Icon type={type} />
                </View>
              ) : null
          )}
```
