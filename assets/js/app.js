// Declarations=================================================

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarText = document.querySelectorAll(".sidebar-Text");
const sidebarHeading = document.querySelector(".sidebar-heading");
const logoTextImg = document.querySelector(".logo-text-img");
const logoName = document.querySelector(".logo-name");
const toggleRightSideCardBtn = document.querySelector(
  ".toggle-right-side-card-btn"
);

const dashboardRightContactCard = document.querySelector(
  ".dashboard-right-contact-card"
);
const dashboardRightTopCard = document.querySelector(
  ".dashboard-right-top-card"
);
const dashboardRightDefaultVisibleCards = document.querySelector(
  ".dashboard-right-default-visible-cards"
);
const notificationBox = document.querySelector(".notification-box");
const chatBox = document.querySelector(".chat-box");
const navbarMsgBox = document.querySelector(".navbar-msg-box");
const closeChatBox = document.querySelector(".close-chat-box");
const chatboxUserAccountInfoRight = document.querySelector(
  ".chat-box-user-account-info-right"
);
const showChatboxUserAccountInfoRight = document.querySelector(
  ".show-chat-box-user-account-info-right"
);
const closeChatBoxUserAccountInfoRight = document.querySelector(
  ".close-chat-box-user-account-info-right"
);

// EVENTS========================================================
const sidebarAccountSettings = document.querySelector(
  ".sidebar-account-settings"
);

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("full-width");
  sidebarHeading.classList.toggle("show-sidebar-heading");
  logoTextImg.classList.toggle("commonHidden");
  sidebarAccountSettings.classList.toggle("sidebar-account-settings-hidden");
  sidebarToggle.classList.toggle("rotate-sidebar-toggle-btn");
  toggleSideBar();
  toggleLogoName();
});

const sidebarAccountLink = document.querySelector(".sidebar-account-link");
const userSettingsContainer = document.querySelector(
  ".user-settings-container"
);

sidebarAccountLink.addEventListener("click", () => {
  toggleSidebarAccount();
});

const sidebarNotifications = document.querySelector(".sidebar-notifications");
const SidebarNotificationContainer = document.querySelector(
  ".sidebar-notification-container"
);

sidebarNotifications.addEventListener("click", () => {
  toggleSidebarTotifications();
});

toggleRightSideCardBtn.addEventListener("click", () => {
  toggleRightSideCard();
  hidetoggleDashboardRightVisibleCards();
});

notificationBox.addEventListener("click", () => {
  toggleSidebarTotifications();
});

navbarMsgBox.addEventListener("click", () => {
  hideChatBox();
  // alert("Hello");
});

closeChatBox.addEventListener("click", () => {
  closeChatBoxFunction();
});

// window.addEventListener("click", (e) => {
//   if (e.target.classList.contains("chat-box-user-account-info-right")) {
//     chatboxUserAccountInfoRight.style.display = "block";
//   } else {
//     hideToggleUserAccountInfoRight();
//   }
// });

showChatboxUserAccountInfoRight.addEventListener("click", () => {
  // chatboxUserAccountInfoRight.classList.remove(
  //   "toggle-chat-box-user-account-info-right"
  // );

  ToggleUserAccountInfoRight();
});
closeChatBoxUserAccountInfoRight.addEventListener("click", () => {
  chatboxUserAccountInfoRight.classList.add(
    "toggle-chat-box-user-account-info-right"
  );
});

// chatboxUserAccountInfoRight.addEventListener("click", () => {

//   alert("Hello");
// });

// functions================================
function toggleSideBar() {
  sidebarText.forEach((el) => {
    el.classList.toggle("hideSidebar-text");
  });
}

function toggleSidebarAccount() {
  SidebarNotificationContainer.classList.remove(
    "toggle-sidebar-notification-container"
  );

  userSettingsContainer.classList.toggle("sidebar-account");
}

function toggleSidebarTotifications() {
  userSettingsContainer.classList.remove("sidebar-account");

  SidebarNotificationContainer.classList.toggle(
    "toggle-sidebar-notification-container"
  );
}
function toggleLogoName() {
  logoName.classList.toggle("toggle-logo-name");
}

function toggleRightSideCard() {
  const changeText = "View contacts";

  if (
    toggleRightSideCardBtn.textContent
      .toLowerCase()
      .includes(changeText.toLowerCase())
  ) {
    toggleRightSideCardBtn.innerHTML = `
    <button class="toggle-right-side-card-btn">
         Back<i class='bx bx-arrow-back'></i>
    </button>`;
  } else {
    toggleRightSideCardBtn.innerHTML = `
    <button class="toggle-right-side-card-btn">
        View Contacts <i class="bx bxs-chevron-right"></i>
    </button>
    `;
  }
  dashboardRightContactCard.classList.toggle("toggle-contact-card");
}
function hidetoggleDashboardRightVisibleCards() {
  dashboardRightDefaultVisibleCards.classList.toggle(
    "toggle-dashboard-right-visible-cards"
  );
}
function hideChatBox() {
  chatBox.classList.remove("hide-chatbox");
}
function closeChatBoxFunction() {
  chatBox.classList.add("hide-chatbox");
}
function ToggleUserAccountInfoRight() {
  chatboxUserAccountInfoRight.classList.toggle(
    "toggle-chat-box-user-account-info-right"
  );
}

// function showToggleUserAccountInfoRight() {
//   chatboxUserAccountInfoRight.classList.remove(
//     "toggle-chat-box-user-account-info-right"
//   );
// }

// color calendar=======================================================

const myEvents = [
  {
    start: "2021-04-15T06:00:00",
    end: "2021-04-15T20:30:00",
    name: "Event 1",
    url: "https://www.cssscript.com",
    desc: "Description 1",
    // more key value pairs here
  },
  {
    start: "2021-04-16T06:00:00",
    end: "2021-04-16T20:30:00",
    name: "Event 2",
    url: "https://www.cssscript.com",
  },
  {
    start: "2021-04-16T06:00:00",
    end: "2021-04-17T20:30:00",
    name: "Event 3",
    url: "https://www.cssscript.com",
  },
];

new Calendar({
  // id: "#color-calendar",
  // eventsData: myEvents,
  // // small or large
  // calendarSize: "small",
  // // basic | glass
  // theme: "basic",
  // primaryColor: "#1a237e",
  // weekdayDisplayType: "short",
  // // short | long
  // monthDisplayType: "short",
  // headerColor: "rgb(0, 102, 0)",
  // an array of layout modifiers
  // layoutModifiers: "month-align-left",

  // small or large
  calendarSize: "short",
  // an array of layout modifiers
  // layoutModifiers: "month-align-left",

  // basic | glass
  theme: "glass",
  // custom colors
  primaryColor: "#f39c12",
  headerColor: "#ffffff",
  headerBackgroundColor: "#f39c12",
  weekdaysColor: "based on theme",
  // short | long-lower | long-upper
  weekdayDisplayType: "short",
  // short | long
  monthDisplayType: "short",
  // 0 (Sun)
  startWeekday: 0,
  // font family
  fontFamilyHeader: "based on theme",
  fontFamilyWeekdays: "based on theme",
  fontFamilyBody: "based on theme",
  // shadow CSS
  dropShadow: "based on theme",
  // border CSS
  border: "based on theme",
  // border radius
  borderRadius: "0.5rem",
  // disable month year pickers
  disableMonthYearPickers: false,
  // disable click on dates
  disableDayClick: false,
  // disable the arrows to navigate between months
  disableMonthArrowClick: false,
});

// Toast UI Calendar==================================================

// calendarJs(id, options, startDateTime)
var calendarInstance = new calendarJs("calendar", {
  // options here
});

var events = [
  {
    from: previousDay,
    to: previousDay,
    title: "Previous Day",
    description:
      "This is a another description of the event that has been added, so it can be shown in the pop-up dialog.",
    location: "Teams Meeting",
    isAllDayEvent: true,
    color: "#FF0000",
    colorText: "#FFFF00",
    colorBorder: "#00FF00",
  },
  // more events here
];

calendarInstance.addEvents(events);
