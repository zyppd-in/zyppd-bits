import React, { useState, useEffect } from 'react'
import chroma from 'chroma-js'
// import ThemeSelector from './ThemeSelector'

import {
  Themes, themeCreator, H1, H2, H3, H4, H5, P, Subtitle, Title, PrimaryBtn, SecondaryBtn, Tabs, Tab, Spinner, useToast,
  Modal, Notification, Message, Group, ZyppdComponents, ListItem, SubtleListItem,
  Input, Checkbox, Select, Option,
  Progress, Pill, Checklist, TextArea,
  PaletteIcon, PeopleIcon, PlusIcon, ReadMoreIcon, useWindowSize,
  Footer, OneOffNotification, useCheck, ModalsContext, AddToCalendar, Skeleton,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  priceToString,
  Accordion
} from 'zyppd-bits'
// import MaterialIcon, { colorPalette } from 'material-icons-react';

import {
  AccessAlarm,
  ThreeDRotation,
  TodayRounded as CalenderIcon,
  PriorityHighRounded as WarningIcon,
  Schedule as ClockIcon,
  Whatshot as FlameIcon,
  SettingsRounded as Cog,
  CheckRounded as Tick,
  CloseRounded as Cross,
  SwapHoriz as SwapHorizontle,
  LockRounded as PasswordIcon,
  SearchRounded as SearchIcon,
  DashboardRounded as DashboardIcon,
  ChevronRightRounded as RightChevron,
  ChevronLeftRounded as LeftChevron,
  EmailRounded as EmailIcon,
  FaceRounded as FaceIcon,
  PhoneRounded as PhoneIcon,
  ArrowRightRounded as RightArrow,
  PersonRounded as PersonIcon,
} from '@material-ui/icons';
import { ChromePicker, } from 'react-color'


const ModalContextComponent = () => {

  const { requiresCheck } = useCheck()
  return (
    <PrimaryBtn
      onClick={() => {
        requiresCheck(`Are you sure?`, () => {
          window.alert("YES I'M SURE")
        })
      }}
    >
      CHECK
    </PrimaryBtn>
  )
}
const App = () => {

  const themes = ['light', 'dark', 'pink', 'JCB']

  const [selectedTheme, setSelectedTheme] = useState(0)

  // Toggle button waiting prop
  const [waiting, setWaiting] = useState(true)

  //Toggle modal visibility
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [modalIsVisible2, setModalIsVisible2] = useState(false)
  const [modalIsVisible3, setModalIsVisible3] = useState(false)


  //placeholder content for Select > Option
  const options = [
    { value: 'chocolate', label: 'Chocolate', name: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry', name: 'Strawberry', isDisabled: true },
    { value: 'vanilla', label: 'Vanilla', name: 'Vanilla' }
  ]


  //Checkbox toggle 
  const [check, setCheck] = useState(false)

  function testCheckbox(e) {
    console.log("checked =>", e.target)
    setCheck(!check)
  }

  const checklistOptions = [
    { value: 'chocolate', label: 'Chocolate', name: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry', name: 'Strawberry', isDisabled: true },
    { value: 'vanilla', label: 'Vanilla', name: 'Vanilla' }
  ]

  function checklistChange(e) {
    console.log(e.name, e.value)

  }

  function handleTextArea(e) {
    e = e.target || e
    console.log(e)
    console.log(e.name, e.value)

  }
  // useWindowSize 
  const windowSize = useWindowSize()

  const [color1, setColor1] = useState('#fafafa')
  const [color2, setColor2] = useState('#f7f7f7')
  const [themeColor, setThemeColor] = useState('#43E896')

  const setThemeCol = (color3) => {
    const { hex } = color3
    setThemeColor(hex);
  };

  const changeTheme = (a, b) => {
    setColor1(b)
    setColor2(a)
  }

  const calendars = {
    "google": "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=16010330T000000Z%2F16010330T023000Z&details=%0A%20%20%20%20%20%20%20%20Booking%20Id%3A%2098b4d%0A%20%20%20%20&location=London%2C%20a%20street%2C%20abc%20123%2C%2099&text=Long%20Test%20Service%20at%20testshoptest&trp=true",
    "outlook": "https://outlook.live.com/calendar/0/deeplink/compose?body=%0A%20%20%20%20%20%20%20%20Booking%20Id%3A%2098b4d%0A%20%20%20%20&enddt=16010330T023000&location=London%2C%20a%20street%2C%20abc%20123%2C%2099&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=16010330T000000&subject=Long%20Test%20Service%20at%20testshoptest",
    "office365": "https://outlook.office.com/calendar/0/deeplink/compose?body=%0A%20%20%20%20%20%20%20%20Booking%20Id%3A%2098b4d%0A%20%20%20%20&enddt=16010330T023000&location=London%2C%20a%20street%2C%20abc%20123%2C%2099&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=16010330T000000&subject=Long%20Test%20Service%20at%20testshoptest",
    "yahoo": "https://calendar.yahoo.com/?desc=%0A%20%20%20%20%20%20%20%20Booking%20Id%3A%2098b4d%0A%20%20%20%20&et=16010330T023000Z&in_loc=London%2C%20a%20street%2C%20abc%20123%2C%2099&st=16010330T000000Z&title=Long%20Test%20Service%20at%20testshoptest&v=60",
    "ics": "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:16010330T000000Z%0ADTEND:16010330T023000Z%0ASUMMARY:Long%20Test%20Service%20at%20testshoptest%0ADESCRIPTION:%5CnBooking%20Id%3A%2098b4d%5Cn%0ALOCATION:London%2C%20a%20street%2C%20abc%20123%2C%2099%0AEND:VEVENT%0AEND:VCALENDAR%0A"
  }

  return (
    <ZyppdComponents
      brandColor={themeColor}
      range={[color1, color2]}
    >
      <main
        style={{
          maxWidth: '900px',
          padding: '1em',
          margin: '0 auto'
        }}
      >



        <div
          style={{
            display: 'flex',
            border: 'solid',

          }}
        >
          <div>
            <h3>Brand Color</h3>
            <ChromePicker
              color={themeColor}
              onChangeComplete={setThemeCol}
            />
          </div>

          {/* <ThemeSelector
            handleTheme={changeTheme}
            theme={Themes()}
          /> */}

        </div>

        <Select
          isSearchable={true}
          isClearable={true}
          options={options}
          message='Message Prop'
        />
        <Select
          isSearchable={true}
          isClearable={true}
          options={options}
          message='Message Prop'
        />
        <Group>
          <h1>Docs</h1>
          <p>Zyppd Components provides components and default global styles relative to the chosen theme.</p>
          <br />
          <p>The project should be wrapped in ZyppdComponents to provide theme styles, a theme prop then accept the theme argument (Defaults to the light theme).
            <br />
            List of themes can be seen above in the buttons
          </p>
          <br />
          <p>Current theme is passed down through ZyppdComponents and can be used just as a theme in styled components</p>
          <br />
          <h3>State Colors</h3>
          <p>On some components the color can be changed to represent changes in the state, the type prop can be set to any value as defined in the themes.stateColors object (in themes.js)</p>
        </Group>


        <ModalContextComponent />
        <Group className="typography">
          <Title>
            Title
          </Title>
          <Subtitle>
            Subtitle
          </Subtitle>
          <H1 style={{ color: 'red' }}>H1</H1>
          <H2>H2</H2>
          <H2 bold>H2 Bold</H2>
          <H3>H3</H3>
          <H4>H4</H4>
          <H5>H5</H5>
          <P>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
            {/* {'...'} */}
          </P>

        </Group>

        <Group className="docs-container">
          <h2 className="section-title">Buttons</h2>
          <h4>PrimaryBtn</h4>
          <p>components/buttons</p>
          <div className="item">
            <p>No Props</p>
            <PrimaryBtn >Hello world</PrimaryBtn>
          </div>

          <div className="item">
            <p>Material icon from npm</p>
            <PrimaryBtn >
              Hello world
              <AccessAlarm />
            </PrimaryBtn>
            {/* <MaterialIcon icon="dashboard" /> */}
          </div>

          <div className="item">

            <PrimaryBtn>
              Hello world
              <RightChevron />
            </PrimaryBtn>
          </div>
          <div className="item">
            <p>disabled=true</p>
            <PrimaryBtn disabled={true}>
              Hello world
              <RightChevron />
            </PrimaryBtn>
          </div>

          <div className="item">
            <p>backward=true</p>
            <PrimaryBtn backward={true}>Hello world</PrimaryBtn>
          </div>

          <div className="item">
            <p> type=negative</p>
            <PrimaryBtn type={'negative'}>Hello world</PrimaryBtn>
          </div>

          <div className="item">
            <p>With notifiation hidden // see list item notification for syntax</p>
            <PrimaryBtn
              type={'negative'}
            >
              <Notification
                type='warning'
                message='notification with a lot of text'
              />

              Hello world</PrimaryBtn>
          </div>
          <div className="item">
            <p>With notifiation hidden // see list item notification for syntax</p>
            <PrimaryBtn
              type={'negative'}
              notification={{
                type: '',
                text: 'Warning notification'
              }}
            >Hello world</PrimaryBtn>
          </div>

          <div className="item">
            <p>type=negative and with nested icon</p>
            <PrimaryBtn type={'negative'}>

              Hello world
              <SwapHorizontle type={'negative'} style={{ marginLeft: '.3em' }} />
            </PrimaryBtn>
          </div>
          <div className="item">
            <p>React feather icon</p>
            <PrimaryBtn type={'negative'}>

              Hello world
            </PrimaryBtn>
          </div>
          <div className="item">
            <p>React feather icon</p>
            <PrimaryBtn type={'negative'}>

              Hello world
            </PrimaryBtn>
          </div>

          <div className="item">
            <p>React feather icon</p>
            <PrimaryBtn>

              Hello world
            </PrimaryBtn>
          </div>

          <div className="item">
            <p> type=warning</p>
            <PrimaryBtn type={'warning'}>Hello world</PrimaryBtn>
          </div>
          <div className="item">
            <p> fullWidth=true</p>
            <PrimaryBtn fullWidth={true} onClick={() => {
              console.log("click")
            }}>Hello world</PrimaryBtn>
          </div>

          <div className="item">
            <p>disabled=true</p>
            <PrimaryBtn disabled={true} onClick={() => {
              console.log("no click")
            }}>Hello world</PrimaryBtn>
          </div>
          <div className="item">
            <p>waiting=true // click to toggle (also toggles disabled prop)</p>
            <PrimaryBtn
              fullWidth={true}
              waiting={waiting ? true : false}
              // disabled={waiting ? true : false}
              onClick={() => setWaiting(!waiting)}
            >
              Hello world
            </PrimaryBtn>
          </div>
          <div className="item">
            {/* <p>waiting=true // click to toggle (also toggles disabled prop)</p> */}
            <PrimaryBtn>
              <LeftChevron />
            </PrimaryBtn>
          </div>

          <h4>SecondaryBtn</h4>
          <p>All above props can apply to SeconaryBtn</p>
          <div className="item">
            <p>No props</p>
            <SecondaryBtn>Hello world</SecondaryBtn>
          </div>
          <div className="item">
            <p>No props</p>
            <SecondaryBtn>
              <LeftChevron></LeftChevron>
            </SecondaryBtn>
          </div>



          <div className="item">
            <p>Parent: Tabs, children: Tab</p>
            <Tabs>
              <Tab>One</Tab>
              <Tab active={true}>Two</Tab>
            </Tabs>
          </div>

        </Group>

        <Group>
          <h2 className="section-title">Add To Calendar</h2>
          <AddToCalendar calendars={calendars} />
        </Group>
        <Group>
          <h2 className="section-title">Pop Ups</h2>

          <h4>Modal</h4>
          <div className="item">

            <PrimaryBtn onClick={() => setModalIsVisible(!modalIsVisible)}>Toggle Pop Up </PrimaryBtn>
            <Modal
              title={'Enter your name'}
              isVisible={modalIsVisible}
              close={() => setModalIsVisible(!modalIsVisible)}
              shade={true}
            >
              <Input
                type="text"
                placeholder="Name"
                name="customer_name"
                message={'Enter your name'}
                // handleInput={handleInput}
                validationNeeded={false}
              />
              <Input
                type="text"
                placeholder="Name"
                name="customer_name"
                message={'Enter your name'}
                // handleInput={handleInput}
                validationNeeded={false}
              />

              {/* <SecondaryBtn onClick={() => setModalIsVisible(!modalIsVisible)}>Close</SecondaryBtn> */}
              {/* <PrimaryBtn>Confirm</PrimaryBtn> */}
            </Modal>
          </div>

          <div className="item">

            <PrimaryBtn onClick={() => setModalIsVisible2(!modalIsVisible2)}>Toggle Pop Up with title prop</PrimaryBtn>
            <Modal
              title={'Modal'}
              isVisible={modalIsVisible2}
            >
              <Input
                type="text"
                placeholder="Name"
                name="customer_name"
                message={'Enter your name'}
                // handleInput={handleInput}
                validationNeeded={false}
              />
              <Input
                type="text"
                placeholder="Name"
                name="customer_name"
                message={'Enter your name'}
                // handleInput={handleInput}
                validationNeeded={false}
              />
              <SecondaryBtn onClick={() => setModalIsVisible2(!modalIsVisible2)}>Close</SecondaryBtn>
              {/* <PrimaryBtn>Confirm</PrimaryBtn> */}
            </Modal>
          </div>

          <div className="item">
            <PrimaryBtn onClick={() => setModalIsVisible3(!modalIsVisible3)}>Toggle Pop Up with shade=true</PrimaryBtn>
            <Modal
              shade={true}
              close={() => setModalIsVisible3(false)}
              isVisible={modalIsVisible3}
            >
              <Input
                type="text"
                placeholder="Name"
                name="customer_name"
                message={'Enter your name'}
                // handleInput={handleInput}
                validationNeeded={false}
              />
              <Input
                type="text"
                placeholder="Name"
                name="customer_name"
                message={'Enter your name'}
                // handleInput={handleInput}
                validationNeeded={false}
              />
              <SecondaryBtn onClick={() => setModalIsVisible3(!modalIsVisible3)}>Close</SecondaryBtn>
            </Modal>
          </div>

        </Group>

        <Group>
          <h2 className="section-title">Accordion</h2>
          <Accordion />
        </Group>

        <Group>
          <h2 className="section-title">Spinners</h2>
          <Spinner />
        </Group>

        <Group>
          <h2 className="section-title">Messages</h2>

          <p>Messsage type=negative</p>
          <Message type={"negative"}>Error Message</Message>

          <p>Messsage type=positive</p>
          <Message type={"positive"}>Success Message</Message>

          <p>fullWidth=true</p>
          <Message fullWidth={true}>Error Message</Message>

        </Group>
        <Group>
          <h2 className="section-title">Forms</h2>
          <h4>Input</h4>
          <p>Includes form validation for name, email and phone numbers</p>
          <p>set <strong>validationNeeded=false</strong>  to disable validation</p>
          <br />
          <p>handleInput prop requires a function to use input.</p>
          <p>A function passed to handleInput receives the input value & isValidated boolean</p>
          <div className="item">
            <Input type="file" name="file" />

            <Input
              // type="text"
              placeholder="Name"
              name="editable_input"
              message={'editable_input'}
              validationNeeded={false}
              useStorage={true}
              editable={true}
              handleExit={() => {
                console.log("Finished")
              }}
              needsEditing={true}
            >
              <EmailIcon />
            </Input>

            <Input
              type="text"
              placeholder="Name no validation"
              name="customer_name"
              message={'Enter your name'}
              validationNeeded={false}
              needsEditing={true}
            />

            <p>With message</p>
            <Input
              type="text"
              placeholder="Name"
              name="customer_name"
              // handleInput={handleInput}
              useStorage={true}
              validationNeeded={false}
            />
            <p>Validation needed</p>
            <Input
              type="email"
              placeholder="Email"
              name="customer_email"
              message={'Enter your email'}
              useStorage={true}
              validationNeeded={true}
            />
            <p>Validation not needed</p>
            <Input
              type="password"
              placeholder="Password"
              name="customer_password"
              message={'Enter your password'}
              useStorage={true}
              validationNeeded={false}
            />
            <p>With icon as child</p>
            <Input
              type="text"
              placeholder="Name"
              name="customer_name"
              message={'Enter your name'}
              // handleInput={handleInput}
              validationNeeded={false}
            >
              <PersonIcon />
            </Input>
            <Input
              type="text"
              placeholder="Name"
              name="customer_name"
              message={'Enter your name'}
              // handleInput={handleInput}
              validationNeeded={false}
            >
              <FaceIcon />
            </Input>
            <Input
              type="tel"
              placeholder="Phone Number"
              name="customer_telNumber"
              message={'Enter your phone number'}
              // handleInput={handleInput}
              validationNeeded={true}
            >
              <PhoneIcon />
            </Input>

            <Input
              type="email"
              placeholder="Email"
              name="customer_email"
              message={'Enter your email'}
              // handleInput={handleInput}
              validationNeeded={true}
            >
              <EmailIcon />
            </Input>
          </div>
          <div className="item">
            <h4>TextArea</h4>
            <TextArea
              placeholder="Text area placeholder"
              name="text_area_name"
              message={'Text area message'}
              handleInput={handleTextArea}
              value="content"
              editable={true}
              handleExit={() => {
                console.log("TEXT AREA DONE")
              }}
            />
          </div>

          <div className="item">
            <h4>Checklist</h4>
            {/* <Checklist
              options={checklistOptions}
              onChange={checklistChange}
            /> */}
          </div>

          <div className="item">
            <h4>Select</h4>
            <Select
              isSearchable={true}
              isClearable={true}
              options={options}
              message='Message Prop'
              onChange={() => console.log(this)}
            />
            <p>IsDisabled=true</p>
            <Select
              isDisabled={true}
              isSearchable={true}
              isClearable={true}
              options={options}
            />


            <div className="item selectAndInput">
              <Select
                options={options}
                className="select"
                defaultValue={options[0]}
              />
              <Input
                type="text"
                placeholder="postcode"
                name="postcode"
                className="input"
                // handleInput={handleInput}
                validationNeeded={false}
              />

            </div>
          </div>

          <div className="item">
            <h4>Checkbox</h4>
            <p>
              Must be passed a checked boolean, toggle with a onClick prop (toggle state)
            </p>
            <Checkbox
              checked={check}
              label={'checkbox'}
              name="checkbox"
              onClick={testCheckbox}
            // onClick={() => {
            //   setCheck(!check)
            // }}
            />
          </div>

          <div className="item">
            <h4>Progress</h4>
            <Progress value="50" max="100" />
          </div>

        </Group>

        <Group>
          <h2 className="section-title">Lists</h2>

          <h4>ListItem</h4>

          <p>ListItem is a motion element, can be passed framer motion props</p>
          <br />
          <p>Pass an icon as child, if it is the last child it will be positioned to right right</p>

          <div className="item">

            <ListItem
              type="warning"
            >
              <WarningIcon />
              Payout updates needed
              <RightChevron />
            </ListItem>

            <ListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              Hello Worldddd
            </ListItem>
            <p>type=warning</p>
            <ListItem
              type={'warning'}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <RightArrow />
              Hello Worldddd
              <RightChevron />
            </ListItem>
            <p>type=disabled</p>
            <ListItem
              type={'disabled'}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              Hello Worldddd
            </ListItem>
            <p>notification={"{'text: 'i am a notification', type: 'warning'}"}</p >
            <ListItem
              // notification={{
              //   text: 'i am a notification',
              //   type: 'warning'
              // }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <Notification
                type='warning'
              />
              Hello Worldddd
            </ListItem>

            <ListItem
              style={{ border: '2px solid red' }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              onClick={() => { console.log("CLiCK") }}
            >
              <LeftChevron type={"positive"}></LeftChevron>
              <div>
                <h2>hello</h2>
                <p>world</p>
              </div>
              <div>
                <h2>More Content</h2>
                <p>more more content thats longer</p>
              </div>
              <RightChevron type={"warning"} />
            </ListItem>
            <ListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <LeftChevron ></LeftChevron>
              Hello World
            </ListItem>
            <ListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              Hello World
              <RightChevron></RightChevron>
            </ListItem>
            <ListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <RightArrow></RightArrow>
              Hello World
              <RightArrow></RightArrow>
            </ListItem>
          </div>

          <div className="item">
            <p>SubtleListItem</p>
            <SubtleListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              Hello World
            </SubtleListItem>
            active=false (Default is true)
            <SubtleListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              active={true}
            >
              Hello World
            </SubtleListItem>
            <SubtleListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              Hello World
            </SubtleListItem>
            <SubtleListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <Tick />
              Hello World
            </SubtleListItem>
            <SubtleListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              Hello World
              <SwapHorizontle></SwapHorizontle>
            </SubtleListItem>
            <SubtleListItem
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <Cog />
              Hello World
              <RightChevron></RightChevron>
            </SubtleListItem>
          </div>
        </Group>

        <Group>
          <h2 className="section-title">Icons</h2>
          <div className="item">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </Group>

        <Group>
          <h2 className="section-title">Pills</h2>
          <div className="item">
            <Pill>
              Some content
            </Pill>
          </div>
        </Group>

        <h1>Helpers</h1>
        <Group>
          <h1>priceToString: {priceToString(30)}</h1>
        </Group>

        <h1>Hooks</h1>
        <Group>
          <h4>useWindowSize</h4>
          <p>useWindowSize output</p>
          <Message>windowSize.width: {windowSize.width}</Message>
          <br />
          <Message>windowSize.height: {windowSize.height}</Message>
        </Group>

        <Group>
          type="warning"
          <Group type="warning">
            A warning group
          </Group>
          type="negative"
          <Group type="negative">
            A negative group
          </Group>
        </Group>
        <OneOffNotification name="notified_of_cookies">
          <p>
            Like most websites, zyppd.in uses cookies to enhance your experience and make our platform better.
            <br /> We don't use cookies to track you, and we don't sell your data to third parties.
            <br /> By continuing to use zyppd.in you're agreeing to the use of these cookies.
          </p>
          <p>
            <a href="https://zyppd.in/cookies/" target="_blank" rel="noopener noreferrer">
              cookie policy
            </a>

          </p>
        </OneOffNotification>
      </main>

      <Skeleton />

      <Footer color="red" business="olly" />
    </ZyppdComponents >
  )
}

export default App
