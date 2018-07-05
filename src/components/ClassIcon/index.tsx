import * as React from 'react';

interface ClassIconProps {
  name: string;
}

// tslint:disable:max-line-length
const Icons = {
  Scout: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M455 604l-18-8a361 361 0 0 0-125-20c-4 0-5-2-5-5a641 641 0 0 1 46-183c54-23 109-41 167-52l34-7c4 0 6 0 8 4 8 14 14 29 14 46 0 15-7 27-14 38-10 16-23 28-39 38l-6 6c-26 41-48 85-60 133l-2 10zM347 374l-2-26c-6-53-15-105-35-155l-8-18c-1-3-2-6-1-10 3-13 9-24 19-33 3-3 9-5 13-5l50-5c42-5 83-13 124-25 17-5 34-13 49-24l25-19v21l3 26c0 4-1 6-5 7l-121 36-61 17c-15 4-27 17-26 34 0 24 0 48 2 72 1 15 5 29 8 43h2l1-4v-51c0-9 6-15 15-15h56l94 1h7c-15 27-40 36-67 46 20 8 39 15 56 28-68 12-134 31-198 59zm-72 341h-60c-5 0-8-2-12-5a57 57 0 0 1-15-39c0-4 8-16 12-17l9 2c12 5 25 6 37 1 11-4 18-10 24-20l29-45c2-3 5-4 9-4 33 0 65 7 96 15 13 3 26 9 39 13 5 2 6 4 3 8l-13 23a150 150 0 0 1-97 68h-61z"/><path d="M386 233l-2-6 1-10c0-8 4-13 12-15l159-28 26-4 5-1-2 10c-3 17-7 34-17 49-3 3-5 4-8 4l-157-1-17 2zm0-39c-4-12 1-20 14-24l40-11 141-42 6-1 3 14-1 23c0 4-2 6-6 7l-152 27-41 7h-4z"/></svg>,
  Soldier: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M624 324l-3-2c-39-25-73-55-101-92-6-8-11-17-18-25-2-4-1-6 1-9 14-16 32-26 50-36l102-59 31-18c3-1 5-1 8 1 18 12 33 27 45 46 2 4 2 7 0 10-31 54-61 108-93 161-5 8-13 15-20 22l-2 1zm-227 51l4 6c11 17 25 31 43 41 5 4 5 4 0 8-40 33-76 70-106 113-16 23-30 47-39 73l-5 25c-2 8-9 12-14 17h-3l-3-3-106-106c-3-3-3-5 0-9 6-7 13-10 22-11 21-4 40-13 58-23 47-26 87-61 123-100l24-28 2-3zm93-166c31 53 73 94 125 125l-2 2c-11 12-23 23-39 30-18 7-35 13-54 15l-2 1c-6 4-11 1-15-2-25-16-45-36-61-61-2-4-3-8 0-12l1-4c2-24 11-46 22-67 4-6 10-11 15-16l10-11zM147 722c22-16 38-37 54-60a239 239 0 0 0-109 86c16-50 40-97 66-143-12 7-25 13-36 22-11 8-20 19-31 29l9-19c15-29 38-52 64-71 9-7 9-7 16 3 21 31 47 58 79 79 4 2 4 4 1 7l-15 14-48 36-9 3-36 14-4 1-1-1zm350-330l-6 5-28 19c-4 2-7 3-10 0-19-11-34-26-45-45-3-4-2-7 0-11l20-28 4-6c14 30 36 51 65 66z"/></svg>,
  Pyro: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M195 209c7 4 14 7 20 12 13 10 27 20 39 31 9 7 15 17 23 26l23 31 8 8c5 4 11 2 14-3l4-14c8-35 21-68 40-98l32-50c6-10 11-20 13-31 3-17 0-33-13-46l-2-4 14 8c23 15 40 35 54 58 22 37 33 78 38 120 5 43 1 86-9 128-3 11-2 22 6 32 10 12 26 12 37 1 8-9 13-19 12-31-1-26 7-48 17-71 8-17 18-34 31-49l8-7-2 16c-3 41 3 81 22 118a219 219 0 0 1-3 179c-37 79-99 124-185 133a226 226 0 0 1-247-198c-3-25 3-49 13-72 9-20 19-39 24-61 12-51 8-101-20-148-3-6-8-11-12-17l1-1z"/></svg>,
  Demo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff" ><path d="M540.1 597.4a877 877 0 0 0-339.2-196.9c41.5-4.8 72.1-24.2 86.4-63.7 14.3-39.5 1.9-74.1-23.8-105.7a588.4 588.4 0 0 1 146 43.2c47 20.3 90.9 45.7 131.9 76.3a607.6 607.6 0 0 1 110.8 104.7l-.8 1.5-14.6-1c-34-2.1-63.3 8.1-85.5 34.6a90.6 90.6 0 0 0-19.9 78.1c2.1 10.3 6.1 20.2 8.7 28.9zm-18.7-203.8c1.4-48.9-40-92.2-89.6-93.7a94 94 0 0 0-97.7 90.3 93.1 93.1 0 0 0 90.6 97 94.2 94.2 0 0 0 96.7-93.6zm-352.5 37.9a603.4 603.4 0 0 1 181.2 65.4 644.3 644.3 0 0 1 174.7 138.6l-1.3 1.6c-1.3-1.3-2.6-2.7-4-3.9-19.3-18-41.4-25.4-67-16.2a48.5 48.5 0 0 0-32 39c-.8 4.1-2.3 5.4-6.1 5.1l-45.2-4.6c-3.8-.4-4.3-2.2-3.8-5.8a80.3 80.3 0 0 0-67.7-92.8 78 78 0 0 0-62.8 16.9c-3.1 2.5-4.9 2.5-7.2-.6l-28.5-38.8c20.5-16.9 28.5-37 19.8-61.5-8.3-23.7-26.9-35.9-50.1-42.4z"/><path d="M667.1 416.4c-4.7-4.6-9.1-9.1-13.7-13.3-13.9-12.8-27.6-25.8-41.9-38.3a457.6 457.6 0 0 0-36-29.1 763 763 0 0 0-53-34.5 1971.5 1971.5 0 0 0-82.7-46.7 598.7 598.7 0 0 0-57.1-26c-19.5-7.8-39.6-14.3-59.6-20.9-9.7-3.2-19.8-5.1-29.8-7.7-1.7-.4-3.3-1.1-5-1.6l-.2-1.4c7.8-4 15.5-8.2 23.4-11.9 1-.5 3.5 1.1 4.7 2.4a68.6 68.6 0 0 0 42.2 21.8 51.8 51.8 0 0 0 58.7-42.8c.8-4.6 2.6-5.6 6.8-5.4a247 247 0 0 1 159.8 63.1c18.9 16.8 34.5 36 47.8 57.3 1.5 2.5 2.4 4.2-.6 6.6a51.7 51.7 0 0 0-9 72.8c10 13.6 23.5 22 39.9 25.6 3.9.9 5.4 2.5 5.3 6.3v23.7zM76.6 229.7l29.5 2.5 109.5 9.6c12.8 1.1 25.6 2 38.3 3.3 1.9.2 4.2 1.4 5.4 2.9a88.2 88.2 0 0 1 10.6 97.5 72.5 72.5 0 0 1-29.5 29.1 79.3 79.3 0 0 1-49.4 12.7c-2.4-.2-5.5-1.8-6.9-3.7C148.9 333.8 114 283.9 79 233.9c-.8-1-1.3-2.2-2.4-4.2zm673.6 388.9l-21.6-1.7-86.6-7.6c-26.4-2.3-52.8-4.5-79.1-7.1-2.3-.2-5.2-2.3-6.5-4.3a86.5 86.5 0 0 1-3.7-87.7c7.3-15 21.3-24.8 36.2-32.6a87.4 87.4 0 0 1 53.4-8.5c2 .3 4.5 1.6 5.7 3.2 33.8 47.9 67.5 95.9 101.1 144 .3.3.4.8 1.1 2.3zM224.8 743.1l1.2-17.3 12-135.9c.2-2.6 1.7-5.9 3.7-7.6a68.5 68.5 0 0 1 79.2-6.5 68.8 68.8 0 0 1 34.2 74 9 9 0 0 1-3.4 5.1L228 741.4c-.6.6-1.4.8-3.2 1.7z"/><path d="M339.3 77.1l10.5 12.1c19 22.5 37.8 45.2 56.9 67.6 2.9 3.4 3 6.7 2.3 10.6a42.6 42.6 0 0 1-34.4 33.4 52.4 52.4 0 0 1-51.1-16.9 10.1 10.1 0 0 1-2.4-7c5.4-32 11.1-63.9 16.8-95.9l1.4-3.9zm407.2 235.2l-20.4 17.2c-18.2 15.3-36.6 30.4-54.7 45.9-4.2 3.6-8 4.2-13.1 2.8-30.3-8.3-47.4-40.7-35.2-68.5 2.7-6.1 9-10.8 13.9-15.9.9-.9 3.2-1 4.7-.7l100.2 17.7c1.3.3 2.4.8 4.6 1.5zM89.7 507.6l28.8-24.1c16-13.4 31.9-26.8 47.9-40 1.6-1.3 4.2-2.3 6-2a50.9 50.9 0 0 1 37.7 68.9c-2.5 5.9-8.4 10.4-13.1 15.3-.8.9-3.1.9-4.6.6l-97.9-17.2-4.8-1.5zM497.2 743l-25.6-30.3c-13.5-16.1-27-32.2-40.6-48.1a9.4 9.4 0 0 1-2.5-8.1c2.1-22.2 27.6-38.1 49.8-35.5 13.5 1.6 25.6 6 34.8 16.5 1.3 1.5 2.4 4.2 2.1 6-5.4 31.5-11 63-16.6 94.5l-1.4 5zm98.6-639.5l-9.5 108.8a315.6 315.6 0 0 0-81.4-46.8l89.6-62.7 1.3.7zm-88.5 289.3a79.2 79.2 0 0 1-79.3 80.4c-52.8 1-80.7-45.6-80.1-79a80.6 80.6 0 0 1 79.6-80.6c51.2-1.1 81.6 45.5 79.8 79.2z"/></svg>,
  Heavy: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M330 586l-82-83 156-156 82 83-156 156zm253-60L427 682l-82-83 156-155 82 82zM151 406l157-157 3 3 75 75c3 3 4 5 0 8L236 485l-3 3-82-82zm181-180l41-32c22-16 46-32 72-43 10-4 19-7 30-7 13 1 19 7 19 20 0 6-1 13-3 19-7 21-18 41-30 58-15 22-31 43-47 63l-2 3-80-81zm177 178l-80-81 22-17c23-19 48-36 75-50l36-13c4-2 9-2 13-1 10 0 16 7 16 18 1 11-3 20-6 30-11 26-26 49-42 71l-31 39-3 4zm97 98l-7-7-70-70c-3-3-3-5 1-8 31-25 63-49 99-67 12-6 24-11 39-11 14 0 21 7 20 21 0 14-6 26-11 39a489 489 0 0 1-71 103zM310 635l16-16 3 2 77 77c3 3 3 5 0 7l-13 13-83-83zm1-31l-17 17-22-24-56-55c-3-4-4-6 0-9l12-12 83 83zm-98-97l-16 17-20-21-58-58c-3-4-3-5 0-8l12-13 82 83z"/></svg>,
  Engineer: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M365 411l-11-10-1-5 24-24h1c4 2 7 7 10 6 6 0 12-1 16-7l4-4c9-6 11-15 13-24l-2-5-6-7c-7-6-7-14 0-21l31-31c3-3 5-3 8-3 7 1 12 4 17 10l9 10 51-51-2-4-32-31c-6-6-6-14 0-21l56-55c5-5 10-5 16-6l4 3a61371 61371 0 0 1 117 120l46 148c1 3 0 5-2 8l-16 16c-3 3-5 3-8 0l-85-85-32-32c-3-3-5-4-8-1l-44 45-4 4 10 8 90 90c3 3 3 4 0 8-7 9-15 10-26 7l-69-16-9 2-42 29c4 6 1 10-4 14l-12 12c-4 4-7 4-12 1h-4l-43 43v1c5 4 2 7-1 10l-6 6c-3 4-6 5-10 0l-19 19c-3 3-4 3-7 0l-22-22c-3-3-4-3-7 0-25 24-48 50-70 76-29 33-61 63-94 92-7 6-14 6-23 5-32-4-55-31-53-63 0-5 3-10 6-14 29-34 59-66 93-95l42-35 49-47 52-52 21-22zm12 138c-6-8-6-8 1-14l1-2c7-6 7-6 13-2l46-45-1-2c-8-7-5-7-13-1-14 13-25 30-43 39-6 3-10 10-16 16l12 11zm-94 22c8 0 14-6 14-14s-6-14-14-14-14 6-14 14 6 14 14 14zm-127 99c-8 0-14 6-14 14s6 14 14 14c8-1 14-7 14-15s-6-13-14-13z"/></svg>,
  Medic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M287.7 530.3h-7.3c-56.7 0-113.3-.1-170 .1-5.1 0-6.8-1.7-7.8-6.4a575 575 0 0 1-10.4-167c2-25.5 7.1-50.8 10.7-76.1.6-4.1 2.5-5.3 6.6-5.2l171 .1h7.2v-6.7c0-56.5.1-113-.1-169.5 0-5 1.6-6.7 6.3-7.8a578.5 578.5 0 0 1 167-10.4c25.5 2 50.7 7.1 76.1 10.7 4.1.6 5.3 2.4 5.3 6.6l-.1 170v7.2h6.7c56.5 0 113 .1 169.5-.1 5 0 6.7 1.6 7.8 6.3a578.4 578.4 0 0 1 10.5 166.5c-2 25.7-7.1 51.1-10.7 76.6-.6 4.1-2.4 5.3-6.6 5.3l-170-.1h-7.1v6.8c0 56.8-.1 113.6.1 170.5 0 5-1.6 6.7-6.3 7.8a575 575 0 0 1-167 10.4c-25.3-2-50.4-7.1-75.6-10.6-4.5-.6-5.8-2.6-5.8-7.2.2-56.8.1-113.6.1-170.5l-.1-7.3zm-60.6-44.5c25.2 0 50.3.1 75.5-.1 4.8 0 8.5 1 11.8 4.8 4.1 4.8 8.7 9.2 13.4 13.4 3.4 3 4.6 6.3 4.6 10.9-.2 50.8 0 101.6-.2 152.5 0 5.4 1.7 7.2 6.8 7.7 7.1.7 14.1 2.5 21.2 3.1 20 1.7 40.2 4.8 60.2 4.2 23.9-.8 47.6-4.9 71.4-7.4 4.6-.5 6.3-2.1 6.3-7.1-.2-50.8-.1-101.6-.2-152.5 0-4.6.9-8.2 4.6-11.4 5-4.3 9.7-9.2 14.1-14.1 2.7-3 5.5-4.1 9.6-4.1 50.8.1 101.6 0 152.5.2 5.2 0 6.9-1.7 7.4-6.5 1.2-10.1 3.4-20 4.3-30.1 1.5-17.4 3.9-34.9 3-52.3-1.1-23.5-4.9-46.9-7.4-70.4-.5-4.9-2.3-6.5-7.4-6.5-51 .2-102 .1-153 .2-3.4 0-5.9-.9-8.3-3.4a326 326 0 0 0-15.5-15.6 11.3 11.3 0 0 1-3.9-9.1c.1-50.8 0-101.6.2-152.5 0-5.4-1.7-7.6-6.8-7.6-.7 0-1.3-.2-2-.3a362.8 362.8 0 0 0-76.9-7.1c-24.7.9-49.3 5-73.9 7.5-4.7.5-6.2 2.2-6.2 7.2.2 51 .1 102 .2 153 0 3.6-.8 6.3-3.6 8.8-5.5 5.1-10.5 10.7-16.1 15.7-2 1.8-5.1 3.2-7.7 3.3-19.7.3-39.3.1-59 .1-31.8 0-63.7.1-95.5-.1-5.2 0-7 1.7-7.4 6.6-.3 4.6-1.7 9.2-2.1 13.8-2 22.5-5.6 45.1-5.2 67.6.5 24.2 4.9 48.3 7.5 72.4.4 4 1.9 5.5 6.3 5.4 25.7-.4 51.6-.2 77.4-.2z"/><path d="M455.1 560.2v69c0 2.9-.2 5.4-3.8 5.8-13.7 1.2-27.4 3.1-41.2 3.3-10.1.1-20.1-2.1-30.2-3-4.5-.4-5.1-2.9-5.1-6.8.1-44.8 0-89.7.2-134.5 0-5.1-1.3-8.7-5-12.2a1443.8 1443.8 0 0 1-35-35 11.6 11.6 0 0 0-9.2-3.7l-135.5.1c-7 0-7-.2-7.6-7.3-.9-9.1-2.9-18.1-2.9-27.2 0-11.6 1-23.2 2.6-34.7 1.5-11.1 2-11 13.2-11l130.5.1c3.8 0 6.5-1.1 9.1-3.8 12-12.3 24.2-24.4 36.4-36.4 2.5-2.4 3.4-4.9 3.4-8.3l-.1-135c0-7 .1-7 7.2-7.6 7.1-.7 14.2-1.4 21.3-2.5 16.1-2.6 31.8 1.6 47.6 2.8 4.3.3 4 3.5 4 6.6l-.1 134.5c0 4.3 1.1 7.4 4.2 10.5 12.1 11.7 23.9 23.6 35.7 35.7 2.7 2.8 5.5 3.7 9.2 3.7l134.5-.1c7 0 6.9.1 7.6 7.3.9 9.1 2.9 18.1 2.9 27.2 0 11.6-1 23.2-2.6 34.7-1.5 11.1-2 11-13.2 11l-129.5-.1c-3.6 0-6.2 1-8.8 3.6-12 12.3-24.2 24.4-36.4 36.4a11 11 0 0 0-3.7 8.7c.4 22.5.3 45.3.3 68.2z"/></svg>,
  Sniper: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M109 414a307 307 0 1 1 614 1 307 307 0 0 1-614-1zm319 267h7a306 306 0 0 0 170-80c36-40 60-86 72-138l6-33-5-1H543c-3 0-5 1-5 4-9 55-50 95-105 103-4 1-5 2-5 6v139zm254-281v-5a298 298 0 0 0-82-172c-42-37-91-61-146-72l-26-4v140c0 4 2 4 5 5 54 7 97 49 105 102 0 5 2 6 6 6h138zM399 537l-6-2c-51-10-89-48-98-99-1-6-3-7-9-7H149v5a300 300 0 0 0 81 171c41 37 88 60 142 72l27 4V537zM293 400c11-60 46-96 106-109V148h-3a306 306 0 0 0-171 81c-36 40-60 88-72 142l-4 29h144zm136-92v92h93c-8-49-42-84-93-92zm93 122h-94v90c50-7 85-40 94-90zM399 308c-25 6-47 16-64 36-13 16-22 35-25 56h89v-92zm-89 121c1 39 48 87 89 90v-90h-89z"/></svg>,
  Spy: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="#fff"><path d="M295 438l61-57 26-25c3-2 3-4 3-7-2-7 4-12 10-11l12 4 2-2 140-154 9-6 111-41 7-3 2 23c-1 15-6 30-15 43-13 19-28 38-45 53l-43 37-104 90-13 11 5 13c1 5-4 12-9 10-6-2-9 1-13 5l-71 88-2 3-73-74zm-60 56l81 81-9 12-76 93c-2 3-4 4-7 3-20-4-35-14-45-32 0-2-3-4-4-4-26-6-42-21-49-46-2-3 0-5 2-6l81-76 26-25zm-79 102c0 10 8 19 18 19s19-8 19-19c0-10-8-18-18-18-11 0-19 8-19 18zm80 50c0-9-6-16-15-17-9 0-16 8-17 16 0 9 8 17 17 17 8 0 15-8 15-16zm94-88l-79-79 27-25 75 76-23 28z"/></svg>,
  Flex: <svg xmlns="http://www.w3.org/2000/svg" width="280.7" height="280.8" fill="#fff"><path strokeWidth="2" d="M153 87a10.1 10.1 0 0 1 1.3-13.6 68.7 68.7 0 0 1 42.9-14.9h8V78h-8.1a47.7 47.7 0 0 0-30.5 11c-1.3 1.3-3.2 2-5.8 2a9.9 9.9 0 0 1-7.8-4zm52.2 115.5h-7.4a49.3 49.3 0 0 1-49.3-49.3v-26a68.8 68.8 0 0 0-68.7-68.7h-4.3V78h4.3a49.3 49.3 0 0 1 49.3 49.2v26a68.8 68.8 0 0 0 68.7 68.6h7.4v-19.3zm-94.3-11a47.7 47.7 0 0 1-30.5 11h-5v19.4h5a66 66 0 0 0 42.8-15.5 10.1 10.1 0 0 0 1.3-13.7 10.2 10.2 0 0 0-13.6-1.3zm106 51.2c2.6 0 4.5-.6 6.5-2.6l20.8-20.8c1.3-1.9 2.6-4.5 2.6-7.1 0-2.6-.6-5.2-2.6-7.1l-20.8-20.8a9.4 9.4 0 0 0-13.6 0v55.8c2 2 4.6 2.6 7.1 2.6zm0-143.3c2.6 0 4.5-.6 6.5-2.6l20.8-20.7a14 14 0 0 0 2.6-7.2c0-2.6-.6-5.2-2.6-7.1L223.4 41a9.4 9.4 0 0 0-13.6 0v55.8c2 2 4.6 2.6 7.1 2.6zM63.8 242.7c2.6 0 5.2-.6 7.1-2.6v-55.8a9.4 9.4 0 0 0-13.6 0l-20.8 20.8a9.8 9.8 0 0 0-2.6 7c0 2.7 1.3 5.3 2.6 7.2l20.8 20.8c2 2 3.9 2.6 6.5 2.6zm0-143.3c2.6 0 5.2-.6 7.1-2.6V41a9.4 9.4 0 0 0-13.6 0L36.5 61.8a9.8 9.8 0 0 0-2.6 7.1 14 14 0 0 0 2.6 7.2l20.8 20.7c2 2 3.9 2.6 6.5 2.6zm0 0"/></svg>
};
// tslint:enable:max-line-length

class ClassIcon extends React.Component<ClassIconProps, {}> {
  render() {
    return Icons[this.props.name];
  }
}

export default ClassIcon;