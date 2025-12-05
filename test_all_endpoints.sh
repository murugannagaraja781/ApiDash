#!/bin/bash

PAYLOAD='{"year":2025,"month":12,"day":4,"hour":12,"minute":0,"lat":13.0827,"lon":80.2707,"tz":5.5}'

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         TESTING ALL POST ENDPOINTS                            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Test 1: Complete
echo "1️⃣  Testing POST /api/astrology/complete"
RESPONSE=$(curl -s -X POST http://localhost:3000/api/astrology/complete \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")
if echo "$RESPONSE" | grep -q "birthDetails"; then
  echo "✅ SUCCESS - Complete astrology data returned"
  echo "   - Birth Date: $(echo $RESPONSE | grep -o '"date":"[^"]*' | cut -d'"' -f4)"
  echo "   - Ascendant: $(echo $RESPONSE | grep -o '"ascendant":{[^}]*' | grep -o '"sign":"[^"]*' | cut -d'"' -f4)"
  echo "   - Current Dasha: $(echo $RESPONSE | grep -o '"mahadasha":{[^}]*' | grep -o '"lord":"[^"]*' | head -1 | cut -d'"' -f4)"
else
  echo "❌ FAILED"
fi
echo ""

# Test 2: Rasi Chart
echo "2️⃣  Testing POST /api/astrology/rasi-chart"
RESPONSE=$(curl -s -X POST http://localhost:3000/api/astrology/rasi-chart \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")
if echo "$RESPONSE" | grep -q "rasiChart"; then
  echo "✅ SUCCESS - Rasi Chart (D1) returned"
  PLANET_COUNT=$(echo "$RESPONSE" | grep -o '"sign":"' | wc -l)
  echo "   - Planets in chart: $PLANET_COUNT"
else
  echo "❌ FAILED"
fi
echo ""

# Test 3: Navamsa Chart
echo "3️⃣  Testing POST /api/astrology/navamsa-chart"
RESPONSE=$(curl -s -X POST http://localhost:3000/api/astrology/navamsa-chart \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")
if echo "$RESPONSE" | grep -q "navamsaChart"; then
  echo "✅ SUCCESS - Navamsa Chart (D9) returned"
  PLANET_COUNT=$(echo "$RESPONSE" | grep -o '"navamsaNumber":' | wc -l)
  echo "   - Planets in chart: $PLANET_COUNT"
else
  echo "❌ FAILED"
fi
echo ""

# Test 4: Dasha
echo "4️⃣  Testing POST /api/astrology/dasha"
RESPONSE=$(curl -s -X POST http://localhost:3000/api/astrology/dasha \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")
if echo "$RESPONSE" | grep -q "mahadashaSequence"; then
  echo "✅ SUCCESS - Dasha information returned"
  CURRENT=$(echo "$RESPONSE" | grep -o '"lord":"[^"]*' | head -1 | cut -d'"' -f4)
  echo "   - Current Mahadasha: $CURRENT"
else
  echo "❌ FAILED"
fi
echo ""

# Test 5: Panchangam
echo "5️⃣  Testing POST /api/astrology/panchangam"
RESPONSE=$(curl -s -X POST http://localhost:3000/api/astrology/panchangam \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")
if echo "$RESPONSE" | grep -q "panchangam"; then
  echo "✅ SUCCESS - Panchangam data returned"
  TITHI=$(echo "$RESPONSE" | grep -o '"tithiName":"[^"]*' | cut -d'"' -f4)
  VARA=$(echo "$RESPONSE" | grep -o '"vara":"[^"]*' | cut -d'"' -f4)
  NAKSHATRA=$(echo "$RESPONSE" | grep -o '"nakshatra":"[^"]*' | head -1 | cut -d'"' -f4)
  echo "   - Tithi: $TITHI"
  echo "   - Vara: $VARA"
  echo "   - Nakshatra: $NAKSHATRA"
else
  echo "❌ FAILED"
fi
echo ""

# Test 6: Planetary Positions
echo "6️⃣  Testing POST /api/astrology/planetary-positions"
RESPONSE=$(curl -s -X POST http://localhost:3000/api/astrology/planetary-positions \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")
if echo "$RESPONSE" | grep -q "planetaryPositions"; then
  echo "✅ SUCCESS - Planetary positions returned"
  PLANET_COUNT=$(echo "$RESPONSE" | grep -o '"sign":"' | wc -l)
  echo "   - Planets: $PLANET_COUNT"
else
  echo "❌ FAILED"
fi
echo ""

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         ALL TESTS COMPLETED                                   ║"
echo "╚════════════════════════════════════════════════════════════════╝"
