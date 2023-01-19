# [Context](https://reactjs.org/docs/context.html)

## When to use Context
```js
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```
- Using context, we can avoid passing props through intermediate elements
```js
// context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closet theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />
  }
}
```

---

## Before You Use Context
- For example, consider a **Page** component that passes a **user** and **avatarSize** prop several levels down so that deeply nested **Link** and **Avatar** components can read it.
```js
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```
- It might feel redundant to pass down the **user** and **avatarSize** props through many levels if in the end only the **Avatar** component really needs it.
- It's also annoying that whenever the **Avatar** component needs more props from the top, you have to add them at all intermediate levels too.
- One way to solve this __without context__ is to [pass down the Avatar component itself](https://reactjs.org/docs/composition-vs-inheritance.html#containment) so that the intermediate components don't need to know about the **user** or **avatarSize** props.
```js
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... Which renders ...
{props.userLink}
```
- With this change, only the top-most Page component needs to know about the **Link** and **Avatar** components' use of **user** and **avatarSize**.
```js
function Page(props) {
  const user = props.user;
  const context = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}
```

---

## API
### React.createContext
```js
const MyContext = React.createContext(defaultValue);
```
- When React renders a component that subscribes to this Context object it will read the current context value from the closet matching **Provider** above it in the tree.
- The **defaultValue** argument is _only_ used when a component does not have a matching Provider above it in the tree.
- passing **undefined** as a Provider value does not cause consuming components to use **defaultValue**.

### Context.Provider
```js
<MyContext.Provider value={/* some value */}>
```
- The Provider component accepts a **value** prop to be passed to consuming coponents that are desendants of this Provider.
- All consumers that are desendants of a Provider will re-render whenever the Provider's **value** prop changes.
- The propagation from Provider to its descendant consumers (including [.contextType](https://reactjs.org/docs/context.html#classcontexttype) and [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)) is not subject to the **shouldComponentUpdate** method, so the consumer is updated even when an ancestor component skips an update.
> The way changes are determined can cause some issues when passing objects as **value**: see [Caveats](https://reactjs.org/docs/context.html#caveats).

### Class.contextType
```js
class MyClass extends React.Componet {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
  }
}
MyClass.contextType = MyContext;
```
- The **contextType** property on a class can be assigned a Context object created by [React.createContext()](https://reactjs.org/docs/context.html#reactcreatecontext).
- Using this property lets you consume the nearest current value of that Context type using **this.context**.
> If you are using the experimental [public class fields syntax](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties), you can use a _static_ class field to initialize your **contextType**
```js
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```

### Context.Consumer
```js
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```
- The **value** argument passed to the function will be equal to the **value** prop of the closet Provider for this context above in the tree.
- If there is no Provider for this context above, the **value** argument will be equal to the **defaultValue** that was passed to **createContext()**.

### Context.displayName
- Context object accepts a **displayName** string property.
```js
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```

---

## Examples
### Dynamic Context
#### theme-context.js
```js
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  }.
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
```
#### themed-button.js
```js
import {themeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
```
#### app.js
```js
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick = {props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Componet {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);
```

### Updating Context from a Nested Component
#### theme-context.js
```js
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
```
#### theme-toggler-button.js
```js
import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
```
#### app.js
```js
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater funtion so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);
```

### Consuming Multiple Contexts
```js
// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Componet {
  render() {
    const {signedInUser, theme} = this.props;

    // App componet that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
```

---

## Caveats
- For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always create for **value**.
```js
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{something: 'something'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```
```js
class App extends React.Componet {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state.value}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

---

## Legacy API