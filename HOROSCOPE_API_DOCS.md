
# Daily Horoscope (Rasipalan) API

This API provides daily horoscope predictions in Tamil based on Gochar (Transit) effects.

## Endpoint

`POST /api/horoscope/daily`

## Description

Calculates the daily prediction based on the user's Rasi (Moon Sign) and the positions of planets on the target date relative to the Moon Sign.

## Request Body

You can provide either `birthDetails` (to calculate Rasi) OR `rasi` directly.

**Option 1: Using Birth Details**
```json
{
  "targetDate": "2023-12-10",
  "birthDetails": {
    "year": 1993,
    "month": 10,
    "day": 29,
    "hour": 6,
    "minute": 45
  }
}
```

**Option 2: Using Rasi Directly**
```json
{
  "targetDate": "2023-12-10",
  "rasi": "Aries"
}
```
*Supported Rasis: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces*

## Response

Returns the prediction summary and detailed planetary effects in Tamil.

```json
{
  "date": "2023-12-10",
  "userRasi": "Aries",
  "summary": "சராசரியான பலன்கள் நடக்கும். (Average Day)",
  "transits": [
    {
      "planet": "Sun",
      "house": 8,
      "currentSign": "Scorpio",
      "effect": "உடல் உபாதை (Health troubles)"
    },
    {
      "planet": "Moon",
      "house": 7,
      "currentSign": "Libra",
      "effect": "பெண்கள் மூலம் மகிழ்ச்சி (Happiness from women)"
    },
    ...
  ]
}
```

## Logic
- Calculates planetary positions for the `targetDate`.
- Determines the house position of each planet relative to the User's Moon Sign (Rasi).
- Retrieves the corresponding prediction from the internal Tamil dictionary.
- Checks for special conditions like *Chandrashtama* (Moon in 8th house).
