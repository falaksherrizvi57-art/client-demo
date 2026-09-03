/* ============================================================
   BUSINESS DATA FILE
   This is the ONLY file you edit for a new client.
   Never touch index.html — it just reads whatever is in here.
   ============================================================ */

const HOTEL = {
  // ---- Identity ----
  name: "Sunrise Hotel & Restaurant",
  tagline: "Rooms above Lahore's most legendary food street",
  heroLine1: "Sleep two floors",
  heroLine2: "above the",
  heroAccent: "loudest, tastiest street",
  heroLine3: "in Lahore.",
  heroSub: "Sunrise Hotel & Restaurant sits right inside Anarkali Food Street — rickshaws, karahi smoke, and 200 years of bazaar noise, with a quiet room and a hot breakfast waiting upstairs.",
  neighborhood: "Anarkali Bazaar · Old Lahore",

  // ---- Contact ----
  phoneDisplay: "+92 321 5555891",
  phoneLink: "+923215555891",      // digits only, for tel: links
  whatsappNumber: "923215555891",  // digits only, no + or spaces, for wa.me links
  address: "40 Anarkali Food St, Anarkali Bazaar, Lahore, 54000, Pakistan",
  nearbyNote: "Goodshot Snooker, open till 4 AM, right at this address",

  // ---- Reviews ----
  rating: 3.7,
  reviewCount: 124,
  ratingBreakdown: { 5: 46, 4: 27, 3: 14, 2: 7, 1: 6 }, // percentages, must add to 100
  reviews: [
    { quote: "Right in the heart of Anarkali — you can smell the karahi from the room. Staff were quick to help with everything we needed.", who: "Google review" },
    { quote: "Simple rooms, but the location can't be beaten if you want to be close to the food street and the old city.", who: "Google review" },
    { quote: "Breakfast was included and the parking made it easy to bring the whole family.", who: "Google review" }
  ],

  // ---- Amenities ----
  amenities: ["Free Wi-Fi", "Free breakfast", "Free parking", "Pool", "Laundry service", "Room service"],

  // ---- Rooms ----
  rooms: [
    { name: "Bazaar View Room", price: "from PKR 6,500 / night", blurb: "A window seat over the food street, one queen bed, free Wi-Fi and breakfast included." },
    { name: "Courtyard Deluxe", price: "from PKR 8,200 / night", blurb: "Quieter, set back from the street, with pool access and daily laundry service." },
    { name: "Family Suite", price: "from PKR 11,000 / night", blurb: "Two rooms, one entrance, room service on call — built for families passing through." }
  ],

  // ---- Restaurant ----
  restaurant: {
    name: "The Sunrise Table",
    description: "Ground-floor dining that spills onto the food street itself — Lahori breakfast at sunrise, karahi and barbecue after dark, open to guests and walk-ins alike.",
    highlights: ["Lahori breakfast", "Live BBQ grill", "Private dining on request", "Open till 1 AM"]
  },

  // ---- Gallery (labels only — real photos get dropped in later) ----
  gallery: [
    { label: "Exterior" },
    { label: "Lobby" },
    { label: "Bazaar View Room" },
    { label: "The Sunrise Table" },
    { label: "Courtyard" },
    { label: "Rooftop" }
  ],

  // ---- Location ----
  mapNote: "Guests can tap through to live directions instantly.",

  // ---- Google rating summary line (top of hero) ----
  ratingSummary: "3.7 ★ from 124 guest reviews on Google"
};
