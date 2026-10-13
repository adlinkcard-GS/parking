// =============================================================
//  ADLINKCARD SMART PARKING - CLIENT SETTINGS
//  The ONLY file to change for a new client.
//  (The Parking Manager shows the form values after "Install".)
// =============================================================
var SP_CONFIG = {
  CLIENT:          "ADLINKCARD Test",

  ARRIVAL_FORM_ID: "1FAIpQLSdBnOVN5Ek6RQPG-JFLkQIgb-nX6YDwQWj2rnyYdDZ2PoOlmQ",
  ARRIVAL_ENTRY:   "entry.764557289",

  REQUEST_FORM_ID: "1FAIpQLSf1sBqOsFaHxBPcj7DC06Lr24bgYVz-iT5SZShrSFddoEicDQ",
  REQUEST_ENTRY:   "entry.1183704098",

  COUNTRY_CODE:    "961",    // default country code on the keypad
  AUTO_SUBMIT:     false,    // false = guest taps "Request my car" (safe)

  // ---- live valet feed (new cars pop up on the valet phones) ----
  //  FEED_URL: the Feed's /exec link (the same for every client)
  //  FEED_KEY: this client's sheet ID (shown by addClient in the Feed)
  //  leave FEED_URL empty = valets type the car number instead
  FEED_URL: "https://script.google.com/macros/s/AKfycbwEZCN0q3vOfHW5SEeE4QiU4hMGtzzpgnNVofbqPOETD5NQ_XwUMkPBZjJHFGhkfA/exec",
  FEED_KEY: "1LqItDtz8Vj29C6Cq-ZzyynLX89S_nCxXjdfSL1wVW70",

  // ---- valet spot page (/spot/) : this parking's own layout ----
  //  zones:  [] = no zones, or a list of big colored buttons
  //  number: true = valet also taps a spot number, false = no number
  //  Examples:
  //   no zoning at all ......... { zones: [], number: false }
  //   numbers only ............. { zones: [], number: true }
  //   levels ................... zones: [{label:"-1",color:"#636363"},{label:"Roof",color:"#f39c12"}]
  SPOTS: {
    zones: [
      { label: "A", color: "#e11e26" },
      { label: "B", color: "#3095db" },
      { label: "C", color: "#009950" }
    ],
    number: true
  }
};
