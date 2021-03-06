const foods = [
  {
    "name": "Flour, barley bran",
    "serving": "1 cup",
    "totalFiber": "100.00",
    "insolubleFiber": "95.70"
  },
  {
    "name": "Bran, corn, dry",
    "serving": "1 cup",
    "totalFiber": "63.20",
    "insolubleFiber": "61.60"
  },
  {
    "name": "Coconut, fresh",
    "serving": "1 medium",
    "totalFiber": "35.70",
    "insolubleFiber": "31.80"
  },
  {
    "name": "All-Bran Buds (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "35.90",
    "insolubleFiber": "28.30"
  },
  {
    "name": "Fiber One (General Mills)",
    "serving": "1 cup",
    "totalFiber": "27.90",
    "insolubleFiber": "26.60"
  },
  {
    "name": "Wheat Bran (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "27.40",
    "insolubleFiber": "25.20"
  },
  {
    "name": "All-Bran with Extra Fiber (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "26.60",
    "insolubleFiber": "24.70"
  },
  {
    "name": "Barley, dry",
    "serving": "1 cup",
    "totalFiber": "31.20",
    "insolubleFiber": "24.40"
  },
  {
    "name": "Bran, wheat (unprocessed)",
    "serving": "1 cup",
    "totalFiber": "24.80",
    "insolubleFiber": "22.90"
  },
  {
    "name": "Bran (Nabisco) 100%",
    "serving": "1 cup",
    "totalFiber": "24.80",
    "insolubleFiber": "22.40"
  },
  {
    "name": "Teff, dry",
    "serving": "1 cup",
    "totalFiber": "26.70",
    "insolubleFiber": "21.70"
  },
  {
    "name": "Bran, rice, dry",
    "serving": "1 cup",
    "totalFiber": "24.80",
    "insolubleFiber": "21.60"
  },
  {
    "name": "Bulgur, dry",
    "serving": "1 cup",
    "totalFiber": "25.60",
    "insolubleFiber": "21.30"
  },
  {
    "name": "Amaranth, dry",
    "serving": "1 cup",
    "totalFiber": "29.60",
    "insolubleFiber": "20.20"
  },
  {
    "name": "Sorghum",
    "serving": "1 cup",
    "totalFiber": "26.50",
    "insolubleFiber": "18.50"
  },
  {
    "name": "All-Bran (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "20.00",
    "insolubleFiber": "18.40"
  },
  {
    "name": "Beans, soybeans, roasted",
    "serving": "1 cup",
    "totalFiber": "30.40",
    "insolubleFiber": "16.70"
  },
  {
    "name": "Figs, dried, uncooked",
    "serving": "1 cup",
    "totalFiber": "24.30",
    "insolubleFiber": "16.30"
  },
  {
    "name": "Flour, triticale, whole grain",
    "serving": "1 cup",
    "totalFiber": "19.00",
    "insolubleFiber": "15.50"
  },
  {
    "name": "Pea (green), undiluted",
    "serving": "1 cup",
    "totalFiber": "17.60",
    "insolubleFiber": "15.20"
  },
  {
    "name": "Buckwheat groats, dry",
    "serving": "1 cup",
    "totalFiber": "16.90",
    "insolubleFiber": "14.60"
  },
  {
    "name": "Lentils, cooked from dried",
    "serving": "1 cup",
    "totalFiber": "15.60",
    "insolubleFiber": "14.40"
  },
  {
    "name": "Almonds",
    "serving": "1 cup",
    "totalFiber": "15.90",
    "insolubleFiber": "14.30"
  },
  {
    "name": "Peas, split, yellow, green, canned",
    "serving": "1 cup",
    "totalFiber": "16.30",
    "insolubleFiber": "14.10"
  },
  {
    "name": "Peas, split, yellow, green, cooked dried",
    "serving": "1 cup",
    "totalFiber": "16.30",
    "insolubleFiber": "14.10"
  },
  {
    "name": "Split pea with ham or bacon, undiluted",
    "serving": "1 cup",
    "totalFiber": "16.50",
    "insolubleFiber": "14.10"
  },
  {
    "name": "Wheat, cracked whole wheat",
    "serving": "1 cup",
    "totalFiber": "16.50",
    "insolubleFiber": "14.00"
  },
  {
    "name": "Florida Avocado, raw",
    "serving": "1 medium without skin and seed",
    "totalFiber": "17.00",
    "insolubleFiber": "13.94"
  },
  {
    "name": "Millet, dry",
    "serving": "1 cup",
    "totalFiber": "17.00",
    "insolubleFiber": "13.80"
  },
  {
    "name": "Chestnuts",
    "serving": "1 cup",
    "totalFiber": "16.70",
    "insolubleFiber": "13.20"
  },
  {
    "name": "Pine nuts – pignolias",
    "serving": "1 cup",
    "totalFiber": "14.60",
    "insolubleFiber": "13.10"
  },
  {
    "name": "Flour, whole wheat",
    "serving": "1 cup",
    "totalFiber": "14.60",
    "insolubleFiber": "12.50"
  },
  {
    "name": "Pine nuts – pinyon",
    "serving": "1 cup",
    "totalFiber": "13.90",
    "insolubleFiber": "12.50"
  },
  {
    "name": "Prune, cooked, unsweetened",
    "serving": "1 cup",
    "totalFiber": "16.40",
    "insolubleFiber": "12.20"
  },
  {
    "name": "Wheat, spelt",
    "serving": "1 cup",
    "totalFiber": "13.70",
    "insolubleFiber": "12.10"
  },
  {
    "name": "Coconut unsweetened",
    "serving": "1 cup",
    "totalFiber": "13.00",
    "insolubleFiber": "11.90"
  },
  {
    "name": "Flax Seed",
    "serving": "1 cup",
    "totalFiber": "25.50",
    "insolubleFiber": "11.70"
  },
  {
    "name": "Flour, barley",
    "serving": "1 cup",
    "totalFiber": "15.00",
    "insolubleFiber": "11.70"
  },
  {
    "name": "Dates",
    "serving": "1 cup",
    "totalFiber": "13.40",
    "insolubleFiber": "11.20"
  },
  {
    "name": "Kretschmer Honey Crunch Wheat Germ (Quaker)",
    "serving": "1 cup",
    "totalFiber": "14.80",
    "insolubleFiber": "11.10"
  },
  {
    "name": "Wheat, germ",
    "serving": "1 cup",
    "totalFiber": "14.60",
    "insolubleFiber": "11.00"
  },
  {
    "name": "Beans, pinto, cooked dried",
    "serving": "1 cup",
    "totalFiber": "14.70",
    "insolubleFiber": "10.90"
  },
  {
    "name": "Flour, rye",
    "serving": "1 cup",
    "totalFiber": "14.90",
    "insolubleFiber": "10.90"
  },
  {
    "name": "Sunflower seeds",
    "serving": "1 cup",
    "totalFiber": "13.40",
    "insolubleFiber": "10.70"
  },
  {
    "name": "Peanuts",
    "serving": "1 cup",
    "totalFiber": "13.20",
    "insolubleFiber": "10.50"
  },
  {
    "name": "Pistachio nuts",
    "serving": "1 cup",
    "totalFiber": "13.80",
    "insolubleFiber": "10.40"
  },
  {
    "name": "Flour, buckwheat",
    "serving": "1 cup",
    "totalFiber": "12.00",
    "insolubleFiber": "10.30"
  },
  {
    "name": "Mixed nuts with peanuts",
    "serving": "1 cup",
    "totalFiber": "12.80",
    "insolubleFiber": "10.20"
  },
  {
    "name": "Cornmeal, dry",
    "serving": "1 cup",
    "totalFiber": "10.20",
    "insolubleFiber": "10.10"
  },
  {
    "name": "Macadamia nuts",
    "serving": "1 cup",
    "totalFiber": "12.50",
    "insolubleFiber": "9.90"
  },
  {
    "name": "Beans, garbanzo, cooked from dried",
    "serving": "1 cup",
    "totalFiber": "12.40",
    "insolubleFiber": "9.80"
  },
  {
    "name": "Bran Cereal with Apples & Cinnamon (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "11.40",
    "insolubleFiber": "9.80"
  },
  {
    "name": "Peas, cowpeas, cooked dried",
    "serving": "1 cup",
    "totalFiber": "11.20",
    "insolubleFiber": "9.80"
  },
  {
    "name": "Raspberries, frozen, sweetened",
    "serving": "1 cup",
    "totalFiber": "11.00",
    "insolubleFiber": "9.80"
  },
  {
    "name": "Flour, soy, defatted",
    "serving": "1 cup",
    "totalFiber": "17.50",
    "insolubleFiber": "9.60"
  },
  {
    "name": "Golden Flax (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "12.90",
    "insolubleFiber": "9.40"
  },
  {
    "name": "Beans, refried, canned",
    "serving": "1 cup",
    "totalFiber": "13.40",
    "insolubleFiber": "9.20"
  },
  {
    "name": "Erewhon #9 Granola with Bran (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "15.10",
    "insolubleFiber": "9.20"
  },
  {
    "name": "Trail mix",
    "serving": "1 cup",
    "totalFiber": "11.10",
    "insolubleFiber": "9.10"
  },
  {
    "name": "Flour, barley malt",
    "serving": "1 cup",
    "totalFiber": "11.50",
    "insolubleFiber": "9.00"
  },
  {
    "name": "Sapodilla",
    "serving": "1 medium",
    "totalFiber": "13.90",
    "insolubleFiber": "9.00"
  },
  {
    "name": "Sesame seeds",
    "serving": "1 cup",
    "totalFiber": "11.70",
    "insolubleFiber": "8.80"
  },
  {
    "name": "Tomato paste",
    "serving": "1 cup",
    "totalFiber": "10.70",
    "insolubleFiber": "8.60"
  },
  {
    "name": "Beans, northern, cooked dried",
    "serving": "1 cup",
    "totalFiber": "11.10",
    "insolubleFiber": "8.30"
  },
  {
    "name": "Elderberries",
    "serving": "1 cup",
    "totalFiber": "10.20",
    "insolubleFiber": "8.30"
  },
  {
    "name": "Beans, baked with pork in brown sugar",
    "serving": "1 cup",
    "totalFiber": "13.20",
    "insolubleFiber": "8.10"
  },
  {
    "name": "Grape-Nuts (Post)",
    "serving": "1 cup",
    "totalFiber": "9.60",
    "insolubleFiber": "8.10"
  },
  {
    "name": "Pear, dried",
    "serving": "1 cup",
    "totalFiber": "13.50",
    "insolubleFiber": "8.10"
  },
  {
    "name": "Quinoa, cooked",
    "serving": "1 cup",
    "totalFiber": "9.30",
    "insolubleFiber": "8.10"
  },
  {
    "name": "Organic Bran with Raisins (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "9.10",
    "insolubleFiber": "8.00"
  },
  {
    "name": "Quinoa, dry",
    "serving": "1 cup",
    "totalFiber": "9.30",
    "insolubleFiber": "8.00"
  },
  {
    "name": "Beans with bacon, undiluted",
    "serving": "1 cup",
    "totalFiber": "10.60",
    "insolubleFiber": "7.90"
  },
  {
    "name": "Uncle Sam (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "9.90",
    "insolubleFiber": "7.90"
  },
  {
    "name": "Beans, baked, vegetarian",
    "serving": "1 cup",
    "totalFiber": "12.60",
    "insolubleFiber": "7.80"
  },
  {
    "name": "Flour, chickpea",
    "serving": "1 cup",
    "totalFiber": "9.90",
    "insolubleFiber": "7.80"
  },
  {
    "name": "Bran, oat bran, dry",
    "serving": "1 cup",
    "totalFiber": "14.50",
    "insolubleFiber": "7.70"
  },
  {
    "name": "Split pea, vegetarian, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "8.80",
    "insolubleFiber": "7.60"
  },
  {
    "name": "Pear, dried, cooked, unsweetened",
    "serving": "1 cup",
    "totalFiber": "16.30",
    "insolubleFiber": "7.50"
  },
  {
    "name": "Raspberries",
    "serving": "1 cup",
    "totalFiber": "8.40",
    "insolubleFiber": "7.50"
  },
  {
    "name": "Guava",
    "serving": "1 cup",
    "totalFiber": "8.90",
    "insolubleFiber": "7.40"
  },
  {
    "name": "Peas, cowpeas, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "8.30",
    "insolubleFiber": "7.40"
  },
  {
    "name": "Beans, navy, cooked dried",
    "serving": "1 cup",
    "totalFiber": "11.70",
    "insolubleFiber": "7.30"
  },
  {
    "name": "Familia Swiss Muesli – Original",
    "serving": "1 cup",
    "totalFiber": "10.00",
    "insolubleFiber": "7.30"
  },
  {
    "name": "Beans, lima, cooked frozen",
    "serving": "1 cup",
    "totalFiber": "9.90",
    "insolubleFiber": "7.20"
  },
  {
    "name": "Erewhon New England Style Granola – Maple (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "12.60",
    "insolubleFiber": "7.20"
  },
  {
    "name": "Raisin Bran (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "8.20",
    "insolubleFiber": "7.20"
  },
  {
    "name": "Raisin Bran (Post)",
    "serving": "1 cup",
    "totalFiber": "8.10",
    "insolubleFiber": "7.20"
  },
  {
    "name": "Beans, baked with pork in tomato sauce",
    "serving": "1 cup",
    "totalFiber": "12.10",
    "insolubleFiber": "7.10"
  },
  {
    "name": "Erewhon Sunflower Crunch Granola (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "12.40",
    "insolubleFiber": "7.10"
  },
  {
    "name": "Raisin Bran (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "8.00",
    "insolubleFiber": "7.10"
  },
  {
    "name": "Erewhon Fruit’n Wheat (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "8.00",
    "insolubleFiber": "7.00"
  },
  {
    "name": "Peach, dried",
    "serving": "1 cup",
    "totalFiber": "13.10",
    "insolubleFiber": "7.00"
  },
  {
    "name": "Raisin Bran (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "8.00",
    "insolubleFiber": "7.00"
  },
  {
    "name": "Split pea with bacon, ham, pork, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "8.20",
    "insolubleFiber": "7.00"
  },
  {
    "name": "Erewhon New England Style Granola – Date Nut (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "12.10",
    "insolubleFiber": "6.90"
  },
  {
    "name": "Familia Swiss Muesli – No Sugar",
    "serving": "1 cup",
    "totalFiber": "9.50",
    "insolubleFiber": "6.90"
  },
  {
    "name": "Flour, peanut, defatted",
    "serving": "1 cup",
    "totalFiber": "9.50",
    "insolubleFiber": "6.90"
  },
  {
    "name": "Erewhon Spiced Apple Granola (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "11.90",
    "insolubleFiber": "6.80"
  },
  {
    "name": "Flour, peanut, low-fat",
    "serving": "1 cup",
    "totalFiber": "9.50",
    "insolubleFiber": "6.80"
  },
  {
    "name": "Barley, cooked",
    "serving": "1 cup",
    "totalFiber": "8.50",
    "insolubleFiber": "6.70"
  },
  {
    "name": "Couscous, dry",
    "serving": "1 cup",
    "totalFiber": "8.60",
    "insolubleFiber": "6.70"
  },
  {
    "name": "Bulgur, home-cooked",
    "serving": "1 cup",
    "totalFiber": "7.90",
    "insolubleFiber": "6.60"
  },
  {
    "name": "Erewhon New England Style Granola – Honey Almond (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "11.60",
    "insolubleFiber": "6.60"
  },
  {
    "name": "Mixed nuts without peanuts",
    "serving": "1 cup",
    "totalFiber": "7.90",
    "insolubleFiber": "6.60"
  },
  {
    "name": "Pecans",
    "serving": "1 cup",
    "totalFiber": "8.20",
    "insolubleFiber": "6.60"
  },
  {
    "name": "Textured vegetable protein, from dry",
    "serving": "1 cup",
    "totalFiber": "9.20",
    "insolubleFiber": "6.60"
  },
  {
    "name": "Loganberries",
    "serving": "1 cup",
    "totalFiber": "7.20",
    "insolubleFiber": "6.50"
  },
  {
    "name": "Lentil, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "7.50",
    "insolubleFiber": "6.40"
  },
  {
    "name": "Pumpkin or squash seeds",
    "serving": "1 cup",
    "totalFiber": "8.80",
    "insolubleFiber": "6.40"
  },
  {
    "name": "Skinner’s Raisin Bran (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "7.20",
    "insolubleFiber": "6.40"
  },
  {
    "name": "Cracklin’ Oat Bran (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "7.80",
    "insolubleFiber": "6.30"
  },
  {
    "name": "Beans, lima, cooked dried",
    "serving": "1 cup",
    "totalFiber": "13.20",
    "insolubleFiber": "6.20"
  },
  {
    "name": "Blackberries",
    "serving": "1 cup",
    "totalFiber": "7.60",
    "insolubleFiber": "6.20"
  },
  {
    "name": "Crunchy Bran (Quaker)",
    "serving": "1 cup",
    "totalFiber": "6.40",
    "insolubleFiber": "6.20"
  },
  {
    "name": "Flour, rice, brown",
    "serving": "1 cup",
    "totalFiber": "7.30",
    "insolubleFiber": "6.20"
  },
  {
    "name": "Peas, green peas, cooked",
    "serving": "1 cup",
    "totalFiber": "8.80",
    "insolubleFiber": "6.20"
  },
  {
    "name": "Flour, corn",
    "serving": "1 cup",
    "totalFiber": "10.90",
    "insolubleFiber": "6.10"
  },
  {
    "name": "Peas, green peas, canned",
    "serving": "1 cup",
    "totalFiber": "7.00",
    "insolubleFiber": "6.10"
  },
  {
    "name": "Pumpkin, canned",
    "serving": "1 cup",
    "totalFiber": "7.10",
    "insolubleFiber": "6.10"
  },
  {
    "name": "Bran Flakes (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "6.71",
    "insolubleFiber": "6.00"
  },
  {
    "name": "Bran Flakes (Post)",
    "serving": "1 cup",
    "totalFiber": "6.70",
    "insolubleFiber": "6.00"
  },
  {
    "name": "Tomato, sun-dried, dry pack",
    "serving": "1 cup",
    "totalFiber": "6.60",
    "insolubleFiber": "6.00"
  },
  {
    "name": "Hickory nuts",
    "serving": "1 cup",
    "totalFiber": "7.70",
    "insolubleFiber": "5.90"
  },
  {
    "name": "Maple Corns (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "5.90"
  },
  {
    "name": "California Avocado, raw",
    "serving": "1 medium without skin and seed",
    "totalFiber": "9.20",
    "insolubleFiber": "5.80"
  },
  {
    "name": "Tomato, sun-dried, oil pack",
    "serving": "1 cup",
    "totalFiber": "6.40",
    "insolubleFiber": "5.80"
  },
  {
    "name": "Beans, kidney, cooked dried",
    "serving": "1 cup",
    "totalFiber": "11.40",
    "insolubleFiber": "5.70"
  },
  {
    "name": "Beans, soybeans, cooked dried",
    "serving": "1 cup",
    "totalFiber": "10.30",
    "insolubleFiber": "5.70"
  },
  {
    "name": "Brazil nuts",
    "serving": "1 cup",
    "totalFiber": "7.50",
    "insolubleFiber": "5.70"
  },
  {
    "name": "Corn nuts",
    "serving": "1 cup",
    "totalFiber": "5.80",
    "insolubleFiber": "5.70"
  },
  {
    "name": "Mini-Wheats – Raisin (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "6.60",
    "insolubleFiber": "5.60"
  },
  {
    "name": "Prune",
    "serving": "1 cup",
    "totalFiber": "12.10",
    "insolubleFiber": "5.60"
  },
  {
    "name": "Complete Wheat Bran Flakes (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "6.10",
    "insolubleFiber": "5.50"
  },
  {
    "name": "Cracked wheat",
    "serving": "1 cup",
    "totalFiber": "6.40",
    "insolubleFiber": "5.50"
  },
  {
    "name": "Mini-Wheats – Apple Cinnamon (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "6.40",
    "insolubleFiber": "5.50"
  },
  {
    "name": "Grainfield’s Raisin Bran (Weetabix)",
    "serving": "1 cup",
    "totalFiber": "6.20",
    "insolubleFiber": "5.40"
  },
  {
    "name": "Mini-Wheats – Blueberry (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "6.30",
    "insolubleFiber": "5.40"
  },
  {
    "name": "Multi-Bran Chex (General Mills)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "5.40"
  },
  {
    "name": "Shredded Wheat’n Bran (Nabisco)",
    "serving": "1 cup",
    "totalFiber": "6.20",
    "insolubleFiber": "5.40"
  },
  {
    "name": "Bite Size Shredded Wheat (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "6.20",
    "insolubleFiber": "5.30"
  },
  {
    "name": "Erewhon Raisin Bran (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "5.30"
  },
  {
    "name": "Granola – Oats & Honey (Grist Mill) 100% Natural",
    "serving": "1 cup",
    "totalFiber": "7.90",
    "insolubleFiber": "5.30"
  },
  {
    "name": "Granola – Oats, Honey & Raisins (Grist Mills) 100% Natural",
    "serving": "1 cup",
    "totalFiber": "8.00",
    "insolubleFiber": "5.30"
  },
  {
    "name": "Millet, cooked",
    "serving": "1 cup",
    "totalFiber": "6.50",
    "insolubleFiber": "5.30"
  },
  {
    "name": "Organic Blue Corn Flakes (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.50",
    "insolubleFiber": "5.30"
  },
  {
    "name": "Persimmon",
    "serving": "1 medium",
    "totalFiber": "6.10",
    "insolubleFiber": "5.30"
  },
  {
    "name": "Erewhon Wheat Flakes (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "5.20"
  },
  {
    "name": "Heartland Granola – Original (Pet)",
    "serving": "1 cup",
    "totalFiber": "8.80",
    "insolubleFiber": "5.20"
  },
  {
    "name": "Heartland Granola – Raisin (Pet)",
    "serving": "1 cup",
    "totalFiber": "8.80",
    "insolubleFiber": "5.20"
  },
  {
    "name": "Low Fat Alpen (Weetabix)",
    "serving": "1 cup",
    "totalFiber": "7.40",
    "insolubleFiber": "5.20"
  },
  {
    "name": "Real Oak Bran – Almond Crunch (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "9.60",
    "insolubleFiber": "5.20"
  },
  {
    "name": "Black bean, undiluted",
    "serving": "1 cup",
    "totalFiber": "6.80",
    "insolubleFiber": "5.10"
  },
  {
    "name": "Gooseberries",
    "serving": "1 cup",
    "totalFiber": "6.50",
    "insolubleFiber": "5.10"
  },
  {
    "name": "Alpen (Weetabix)",
    "serving": "1 cup",
    "totalFiber": "7.10",
    "insolubleFiber": "5.00"
  },
  {
    "name": "Erewhon Kamut Flakes (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "5.80",
    "insolubleFiber": "5.00"
  },
  {
    "name": "Mini-Wheats – Frosted Bite Size (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "5.00"
  },
  {
    "name": "Mini-Wheats – Frosted Original (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "5.00"
  },
  {
    "name": "Mini-Wheats – Strawberry (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "5.00"
  },
  {
    "name": "Bulgur, canned",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "4.90"
  },
  {
    "name": "Organic Amaranth Flakes (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "4.90"
  },
  {
    "name": "Organic Fiber 7 Flakes (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "4.90"
  },
  {
    "name": "Spinach, cooked frozen",
    "serving": "1 cup",
    "totalFiber": "6.10",
    "insolubleFiber": "4.90"
  },
  {
    "name": "Fat-Free Honey Clusters & Flakes, Almond (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Fat-Free Honey Clusters & Flakes, Apple Cinnamon (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Fat-Free Honey Clusters & Flakes, Honey Crunch (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Filberts or hazelnuts",
    "serving": "1 cup",
    "totalFiber": "8.20",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Morning Traditions Great Grains Raisins, Dates and Pecans (Post)",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Organic Healthy Fiber Flakes (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.70",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Sweet potato, cooked",
    "serving": "1 cup",
    "totalFiber": "7.60",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Wheat Chex (General Mills)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Yams, cooked",
    "serving": "1 cup",
    "totalFiber": "7.60",
    "insolubleFiber": "4.80"
  },
  {
    "name": "Granola – Date Almond (Health Valley) 98% Fat-Free",
    "serving": "1 cup",
    "totalFiber": "7.70",
    "insolubleFiber": "4.70"
  },
  {
    "name": "Granola – Raisin Cinnamon (Health Valley) 98% Fat-Free",
    "serving": "1 cup",
    "totalFiber": "7.70",
    "insolubleFiber": "4.70"
  },
  {
    "name": "Granola – Tropical (Health Valley) 98% Fat-Free",
    "serving": "1 cup",
    "totalFiber": "7.70",
    "insolubleFiber": "4.70"
  },
  {
    "name": "Mountain House Granola with Blueberries (Oregon Freeze Dry)",
    "serving": "1 cup",
    "totalFiber": "7.90",
    "insolubleFiber": "4.70"
  },
  {
    "name": "Kasha, cooked",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "4.60"
  },
  {
    "name": "Morning Traditions Great Grains Crunch Pecan (Post)",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "4.60"
  },
  {
    "name": "Nutri-Grain – Golden Wheat (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "5.00",
    "insolubleFiber": "4.60"
  },
  {
    "name": "Oatmeal, dry",
    "serving": "1 cup",
    "totalFiber": "8.60",
    "insolubleFiber": "4.60"
  },
  {
    "name": "Organic Raisin Bran Flakes (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "4.60"
  },
  {
    "name": "Sprouts, acorn, cooked",
    "serving": "1 cup",
    "totalFiber": "10.80",
    "insolubleFiber": "4.60"
  },
  {
    "name": "Bite Size Shredded Wheat, Sweetened (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "4.50"
  },
  {
    "name": "Cashews",
    "serving": "1 cup",
    "totalFiber": "4.90",
    "insolubleFiber": "4.50"
  },
  {
    "name": "Flour, soy, full-fat",
    "serving": "1 cup",
    "totalFiber": "8.10",
    "insolubleFiber": "4.50"
  },
  {
    "name": "Mueslix – Apple & Almond Crunch (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "4.50"
  },
  {
    "name": "Raisins",
    "serving": "1 cup",
    "totalFiber": "6.20",
    "insolubleFiber": "4.50"
  },
  {
    "name": "Cranberries, dried (Craisins)",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "4.40"
  },
  {
    "name": "Minestrone, undiluted",
    "serving": "1 cup",
    "totalFiber": "6.60",
    "insolubleFiber": "4.40"
  },
  {
    "name": "Mixed vegetables, canned",
    "serving": "1 cup",
    "totalFiber": "5.50",
    "insolubleFiber": "4.40"
  },
  {
    "name": "Mueslix – Raisin & Almond Crunch with Dates (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "4.40"
  },
  {
    "name": "Raisin Nut Bran (General Mills)",
    "serving": "1 cup",
    "totalFiber": "5.10",
    "insolubleFiber": "4.40"
  },
  {
    "name": "Total Raisin Bran (General Mills)",
    "serving": "1 cup",
    "totalFiber": "5.00",
    "insolubleFiber": "4.40"
  },
  {
    "name": "Flour, potato",
    "serving": "1 cup",
    "totalFiber": "9.40",
    "insolubleFiber": "4.30"
  },
  {
    "name": "Fruit & Fiber – Dates, Raisins & Walnuts (Post)",
    "serving": "1 cup",
    "totalFiber": "5.00",
    "insolubleFiber": "4.30"
  },
  {
    "name": "Spinach, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "5.40",
    "insolubleFiber": "4.30"
  },
  {
    "name": "Sun Country Granola with Raisins & Dates (Quaker)",
    "serving": "1 cup",
    "totalFiber": "7.20",
    "insolubleFiber": "4.30"
  },
  {
    "name": "Baking chocolate",
    "serving": "1 oz",
    "totalFiber": "4.40",
    "insolubleFiber": "4.20"
  },
  {
    "name": "Beans, soybeans, green cooked",
    "serving": "1 cup",
    "totalFiber": "7.60",
    "insolubleFiber": "4.20"
  },
  {
    "name": "Flour, arrowroot",
    "serving": "1 cup",
    "totalFiber": "4.30",
    "insolubleFiber": "4.20"
  },
  {
    "name": "Mixed vegetables, frozen",
    "serving": "1 cup",
    "totalFiber": "8.00",
    "insolubleFiber": "4.20"
  },
  {
    "name": "Low Fat Granola (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "5.80",
    "insolubleFiber": "4.10"
  },
  {
    "name": "Apple, baked with skin, unsweetened",
    "serving": "1 medium",
    "totalFiber": "5.40",
    "insolubleFiber": "4.00"
  },
  {
    "name": "Gooseberries, canned",
    "serving": "1 cup",
    "totalFiber": "6.00",
    "insolubleFiber": "4.00"
  },
  {
    "name": "Organic Oat Bran Flakes with Raisins (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "5.20",
    "insolubleFiber": "4.00"
  },
  {
    "name": "Shredded Wheat Spoon Size (Nabisco)",
    "serving": "1 cup",
    "totalFiber": "4.80",
    "insolubleFiber": "4.00"
  },
  {
    "name": "Walnuts",
    "serving": "1 cup",
    "totalFiber": "5.80",
    "insolubleFiber": "4.00"
  },
  {
    "name": "Beans with bacon, ham or pork, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "3.90"
  },
  {
    "name": "Black bean, ready-to serve can",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "3.90"
  },
  {
    "name": "Healthy Choice Toasted Brown Sugar Squares (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "4.60",
    "insolubleFiber": "3.90"
  },
  {
    "name": "Sauerkraut",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "3.90"
  },
  {
    "name": "Peach, dried, cooked, unsweetened",
    "serving": "1 cup",
    "totalFiber": "7.00",
    "insolubleFiber": "3.80"
  },
  {
    "name": "Spinach, canned",
    "serving": "1 cup",
    "totalFiber": "5.10",
    "insolubleFiber": "3.80"
  },
  {
    "name": "Strawberries, frozen, sweetened",
    "serving": "1 cup",
    "totalFiber": "4.80",
    "insolubleFiber": "3.80"
  },
  {
    "name": "Bran Flakes (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "4.40",
    "insolubleFiber": "3.70"
  },
  {
    "name": "Endive (curly), cooked",
    "serving": "1 cup",
    "totalFiber": "5.20",
    "insolubleFiber": "3.70"
  },
  {
    "name": "Low Fat Granola with Raisins (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "5.40",
    "insolubleFiber": "3.70"
  },
  {
    "name": "Apple, baked with skin, sweetened",
    "serving": "1 medium",
    "totalFiber": "4.90",
    "insolubleFiber": "3.60"
  },
  {
    "name": "Cauliflower, cooked frozen",
    "serving": "1 cup",
    "totalFiber": "4.90",
    "insolubleFiber": "3.60"
  },
  {
    "name": "Healthy Choice Almond Crunch with Raisins (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "4.20",
    "insolubleFiber": "3.60"
  },
  {
    "name": "Muffins, English, whole wheat",
    "serving": "1 each",
    "totalFiber": "4.40",
    "insolubleFiber": "3.60"
  },
  {
    "name": "Rhubarb, cooked, sweetened",
    "serving": "1 cup",
    "totalFiber": "4.80",
    "insolubleFiber": "3.60"
  },
  {
    "name": "Beans, bayo, cooked",
    "serving": "1 cup",
    "totalFiber": "5.80",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Blueberries",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Flour, soy, low-fat",
    "serving": "1 cup",
    "totalFiber": "9.00",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Frosted Shredded Wheat Bite Size (Nabisco)",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Healthy Choice Golden Multi-Grain Flakes (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Pasta, noodles, whole wheat, cooked",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Squash, chayote, cooked",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Sun Country Granola with Almonds (Quaker)",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Vita Crunch Granola – Almond (Organic Milling Company)",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Vita Crunch Granola – Tropical (Organic Milling Company)",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "3.50"
  },
  {
    "name": "Apple, dried",
    "serving": "1 cup",
    "totalFiber": "7.50",
    "insolubleFiber": "3.40"
  },
  {
    "name": "Corn, cooked frozen, whole kernel",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "3.40"
  },
  {
    "name": "Honey Nut Shredded Wheat – Bite Size (Nabisco)",
    "serving": "1 cup",
    "totalFiber": "4.00",
    "insolubleFiber": "3.40"
  },
  {
    "name": "Mushrooms, canned",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "3.40"
  },
  {
    "name": "Peas, snow peas, cooked",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "3.40"
  },
  {
    "name": "Mixed vegetables (peas & carrots), canned",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "3.30"
  },
  {
    "name": "Mixed vegetables (peas & carrots), frozen",
    "serving": "1 cup",
    "totalFiber": "5.00",
    "insolubleFiber": "3.30"
  },
  {
    "name": "Rice, brown, cooked",
    "serving": "1 cup",
    "totalFiber": "3.50",
    "insolubleFiber": "3.30"
  },
  {
    "name": "Rolled wheat",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "3.30"
  },
  {
    "name": "Complete Oat Bran Flakes (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "4.80",
    "insolubleFiber": "3.20"
  },
  {
    "name": "Vita Crunch Granola – Light & Crunchy 7 Grain (Organic Milling Co)",
    "serving": "1 cup",
    "totalFiber": "4.90",
    "insolubleFiber": "3.20"
  },
  {
    "name": "Vita Crunch Granola – Raisin (Organic Milling Company)",
    "serving": "1 cup",
    "totalFiber": "4.90",
    "insolubleFiber": "3.20"
  },
  {
    "name": "Cereal party mix, homemade",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Chard, cooked",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Fat-Free 10 Bran O’s, Apple Cinnamon (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Jicama or yambean, raw",
    "serving": "1 cup",
    "totalFiber": "6.40",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Mushrooms, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Oatmeal Crisp – Almond (General Mills)",
    "serving": "1 cup",
    "totalFiber": "4.30",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Okra, cooked",
    "serving": "1 cup",
    "totalFiber": "5.10",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Pasta, macaroni noodles, whole wheat, cooked",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Pasta, spaghetti noodles, whole wheat, cooked",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Pear, canned, water pack",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "3.10"
  },
  {
    "name": "Carrots, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "5.20",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Coconut sweetened",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Corn, canned, drained",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Cranberries",
    "serving": "1 cup",
    "totalFiber": "4.00",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Four, rice, white",
    "serving": "1 cup",
    "totalFiber": "3.80",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Morning Traditions Banana Nut Crunch (Post)",
    "serving": "1 cup",
    "totalFiber": "4.00",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Oat bran",
    "serving": "1 cup",
    "totalFiber": "5.70",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Tomato puree",
    "serving": "1 cup",
    "totalFiber": "5.00",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Total (General Mills)",
    "serving": "1 cup",
    "totalFiber": "3.50",
    "insolubleFiber": "3.00"
  },
  {
    "name": "Crispy Wheaties ‘N Raisins (General Mills)",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "2.90"
  },
  {
    "name": "Granola with Raisins (Quaker) 100% Natural Low Fat",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "2.90"
  },
  {
    "name": "Nature Valley Low Fat Fruit Granola (General Mills)",
    "serving": "1 cup",
    "totalFiber": "5.10",
    "insolubleFiber": "2.90"
  },
  {
    "name": "Nutri-Grain – Almond Raisin (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "3.20",
    "insolubleFiber": "2.90"
  },
  {
    "name": "Skinner’s Corn Flakes (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.90"
  },
  {
    "name": "Squash, winter (dark green or orange), cooked",
    "serving": "1 cup",
    "totalFiber": "6.70",
    "insolubleFiber": "2.90"
  },
  {
    "name": "Carrots, cooked frozen",
    "serving": "1 cup",
    "totalFiber": "4.80",
    "insolubleFiber": "2.80"
  },
  {
    "name": "Figs",
    "serving": "1 cup",
    "totalFiber": "5.80",
    "insolubleFiber": "2.80"
  },
  {
    "name": "Oat Bran Ready-To-Eat (Quaker)",
    "serving": "1 cup",
    "totalFiber": "4.80",
    "insolubleFiber": "2.80"
  },
  {
    "name": "Oatmeal Crisp – Apple Cinnamon (General Mills)",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "2.80"
  },
  {
    "name": "Plaintains, boiled or baked",
    "serving": "1 cup",
    "totalFiber": "3.50",
    "insolubleFiber": "2.80"
  },
  {
    "name": "Squash, hubbard, cooked",
    "serving": "1 cup",
    "totalFiber": "6.60",
    "insolubleFiber": "2.80"
  },
  {
    "name": "Turnip greens, cooked",
    "serving": "1 cup",
    "totalFiber": "5.00",
    "insolubleFiber": "2.80"
  },
  {
    "name": "Apple, with skin",
    "serving": "1 medium",
    "totalFiber": "3.70",
    "insolubleFiber": "2.70"
  },
  {
    "name": "Broccoli, cooked frozen",
    "serving": "1 cup",
    "totalFiber": "5.50",
    "insolubleFiber": "2.70"
  },
  {
    "name": "Cherries, canned, heavy syrup",
    "serving": "1 cup",
    "totalFiber": "3.80",
    "insolubleFiber": "2.70"
  },
  {
    "name": "Figs, canned, heavy syrup",
    "serving": "1 cup",
    "totalFiber": "5.70",
    "insolubleFiber": "2.70"
  },
  {
    "name": "Mandarin orange",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "2.70"
  },
  {
    "name": "Spelt Flakes (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "2.70"
  },
  {
    "name": "Basic 4 (General Mills)",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "2.60"
  },
  {
    "name": "Cornmeal",
    "serving": "1 cup",
    "totalFiber": "2.70",
    "insolubleFiber": "2.60"
  },
  {
    "name": "Parsnip, cooked",
    "serving": "1 cup",
    "totalFiber": "6.20",
    "insolubleFiber": "2.60"
  },
  {
    "name": "Pita, whole wheat",
    "serving": "1 medium",
    "totalFiber": "3.30",
    "insolubleFiber": "2.60"
  },
  {
    "name": "Rutabaga, cooked",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "2.60"
  },
  {
    "name": "Scallions or spring onions, cooked",
    "serving": "1 cup",
    "totalFiber": "5.50",
    "insolubleFiber": "2.60"
  },
  {
    "name": "Wild rice, cooked",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "2.60"
  },
  {
    "name": "Brussels sprouts, cooked",
    "serving": "1 cup",
    "totalFiber": "6.40",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Cauliflower, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Erewhon Galaxy Grahams (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Fat-Free Granola O’s – Almond (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Fat-Free Granola O’s – Apple Cinnamon (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Fat-Free Granola O’s – Honey Crunch (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Honey Nut Clusters (General Mills)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Kamut Flakes (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Oatmeal Crisp – Raisin (General Mills)",
    "serving": "1 cup",
    "totalFiber": "3.50",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Oatmeal Squares (Quaker)",
    "serving": "1 cup",
    "totalFiber": "4.20",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Oatmeal Squares – Cinamon (Quaker)",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Organic Oat Bran Flakes (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Rolls, hamburger, whole wheat",
    "serving": "1 medium",
    "totalFiber": "2.80",
    "insolubleFiber": "2.50"
  },
  {
    "name": "Just Right Fruit & Nut (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.40"
  },
  {
    "name": "Just Right with Crunchy Nuggets (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "2.80",
    "insolubleFiber": "2.40"
  },
  {
    "name": "Morning Traditions Cranberry Almond Crunch (Post)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.40"
  },
  {
    "name": "Peppers, jalapeno, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "2.40"
  },
  {
    "name": "Strawberries",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "2.40"
  },
  {
    "name": "Beans, green or string, cooked frozen",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Beans, wax or yellow, cooked frozen",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Beet greens, cooked",
    "serving": "1 cup",
    "totalFiber": "4.20",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Broccoli, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "4.60",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Cherries",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Corn, cooked fresh, cob",
    "serving": "1 medium",
    "totalFiber": "2.80",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Hominy, canned",
    "serving": "1 cup",
    "totalFiber": "4.10",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Muffins, bran",
    "serving": "1 medium",
    "totalFiber": "2.60",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Multi Grain Flakes (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Sweet potato, canned, syrup packed",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Toasted Oatmeal – Honey Nut (Quaker)",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Tomatillo, raw",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Yams, canned, syrup-packed, drained",
    "serving": "1 cup",
    "totalFiber": "5.90",
    "insolubleFiber": "2.30"
  },
  {
    "name": "Asparagus, cooked",
    "serving": "1 cup",
    "totalFiber": "5.60",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Chocolate-covered almonds",
    "serving": "1 oz",
    "totalFiber": "2.50",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Cinnamon Life (Quaker)",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Mango",
    "serving": "1 medium",
    "totalFiber": "3.70",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Minestrone, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Puffed Millet (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Rhubarb, cooked, unsweetened",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Sweet potato, canned, vacuum packed",
    "serving": "1 cup",
    "totalFiber": "3.60",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Vegetable beef, ready-to-serve can, chunky-style",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Vegetable beef, undiluted",
    "serving": "1 cup",
    "totalFiber": "3.20",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Vegetable, (vegetarian), ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "3.20",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Yams, canned, vacuum-packed",
    "serving": "1 cup",
    "totalFiber": "3.60",
    "insolubleFiber": "2.20"
  },
  {
    "name": "Amaranth Flakes (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Applesauce,canned, sweetened",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Banana",
    "serving": "1 medium",
    "totalFiber": "2.80",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Beans, green or string, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Beans, wax or yellow, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Cheerios (General Mills)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Collards, cooked",
    "serving": "1 cup",
    "totalFiber": "5.30",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Couscous, cooked",
    "serving": "1 cup",
    "totalFiber": "2.70",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Oatmeal, instant, plain",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Oatmeal, regular",
    "serving": "1 cup",
    "totalFiber": "4.00",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Rolls, whole wheat",
    "serving": "1 medium",
    "totalFiber": "2.50",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Vegetable, undiluted",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "2.10"
  },
  {
    "name": "Applesauce, canned, unsweetened",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Kiwi",
    "serving": "1 medium",
    "totalFiber": "2.60",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Organic Oat Bran O’s (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Peach, canned, heavy syrup",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Peach, canned, water pack",
    "serving": "1 cup",
    "totalFiber": "3.20",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Pear, canned, heavy syrup",
    "serving": "1 cup",
    "totalFiber": "4.30",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Puffed Wheat (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Rolls, submarine, hoagie",
    "serving": "1 medium",
    "totalFiber": "2.80",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Squash, summer (green or yellow) cooked",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Toasted Oatmeal – Original (Quaker)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Turnip, cooked",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "2.00"
  },
  {
    "name": "Broccoli cheese, undiluted",
    "serving": "1 cup",
    "totalFiber": "3.90",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Cabbage, green, cooked",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Chinese cabbage, Pe-tsai, raw",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Corn grits, dry",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Frosted Flakes (Quaker)",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Honey Frosted Wheaties (General Millsj)",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Nature O’s (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Oat Bran Flakes (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "3.50",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Organic Crisp Brown Rice (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "2.20",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Peppers, red – sweet, raw",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Shredded Wheat (Nabisco)",
    "serving": "1 biscuit",
    "totalFiber": "2.30",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Smart Start (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "2.30",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Squash, butternut, cooked",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "1.90"
  },
  {
    "name": "Bagel, whole wheat",
    "serving": "1 medium",
    "totalFiber": "2.60",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Corn Flakes (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Eggplant, cooked",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.80"
  },
  {
    "name": "French Toast Crunch (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Pear",
    "serving": "1 medium",
    "totalFiber": "4.00",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Potato, boiled, with skin",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Tomato, green, raw",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Tomato, raw",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Turnip greens, canned",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Water chestnuts, canned",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "1.80"
  },
  {
    "name": "Apple, without skin",
    "serving": "1 medium",
    "totalFiber": "2.40",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Apricot",
    "serving": "1 cup",
    "totalFiber": "3.70",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Bread, cracked wheat, lo-cal, hi-fiber",
    "serving": "1 slice",
    "totalFiber": "3.10",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Bread, wheat, lo-cal, hi-fiber",
    "serving": "1 slice",
    "totalFiber": "3.10",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Bread, white, lo-cal, hi-fiber",
    "serving": "1 slice",
    "totalFiber": "3.10",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Broccoli, raw",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Cabbage, red, cooked",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Carrots, raw",
    "serving": "1 cup",
    "totalFiber": "3.30",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Celery, cooked",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Chinese cabbage, Pak-choi, cooked",
    "serving": "1 cup",
    "totalFiber": "2.70",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Cinnamon Toast Crunch (General Mills)",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Cream of wheat, multigrained",
    "serving": "1 cup",
    "totalFiber": "3.00",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Fennel bulb, raw",
    "serving": "1 cup",
    "totalFiber": "2.70",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Life (Quaker)",
    "serving": "1 cup",
    "totalFiber": "2.70",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Pineapple",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Potato, baked, with skin",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Puffed Corn (Health Valley)",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Shredded Wheat (Quaker)",
    "serving": "1 biscuit",
    "totalFiber": "2.00",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Weetabix (Weetabix)",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.70"
  },
  {
    "name": "Bagel, pumpernickel, rye",
    "serving": "1 medium",
    "totalFiber": "2.60",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Beans, green or string, canned",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Bread, Boston brown",
    "serving": "1 slice",
    "totalFiber": "2.10",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Bread, multigrain, granola, lo-cal, hi-fiber",
    "serving": "1 slice",
    "totalFiber": "2.80",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Bread, whole wheat",
    "serving": "1 slice",
    "totalFiber": "2.00",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Carambola (starfruit)",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Cauliflower, raw",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Colossal Crunch (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Dark chocolate",
    "serving": "1 oz",
    "totalFiber": "1.70",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Oatmeal, instant, flavored",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Onion flavored rings",
    "serving": "1 oz",
    "totalFiber": "1.70",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Pancake, whole wheat",
    "serving": "1 medium",
    "totalFiber": "1.80",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Peppers, green – sweet, raw",
    "serving": "1 cup",
    "totalFiber": "2.70",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Tempeh (fermented soybean product)",
    "serving": "1 oz",
    "totalFiber": "2.90",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Tomato, undiluted",
    "serving": "1 cup",
    "totalFiber": "2.20",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Wafflers – Cinnamon, Maple, Original, Vanilla Nut (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.60"
  },
  {
    "name": "Beets, canned",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Bread, multigrain, granola",
    "serving": "1 slice",
    "totalFiber": "1.80",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Broccoflower (green cauliflower) cooked",
    "serving": "1 cup",
    "totalFiber": "2.70",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Chinese cabbage, Pe-tsai, cooked",
    "serving": "1 cup",
    "totalFiber": "3.20",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Chocolate-covered coconut",
    "serving": "1 oz",
    "totalFiber": "1.60",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Fruit cocktail, canned, water pack",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Grainfield’s Corn Flakes (Weetabix)",
    "serving": "1 cup",
    "totalFiber": "1.70",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Jicama or yambean, cooked",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Kohlrabi, raw",
    "serving": "1 cup",
    "totalFiber": "4.90",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Milk chocolate with almonds",
    "serving": "1 oz",
    "totalFiber": "1.80",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Multi Grain Cheerios Plus (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Peppers, jalapeno, raw",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Pineapple, canned, juice pack",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Pineapple, canned, light syrup",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Vegetable juice",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.50"
  },
  {
    "name": "Beets, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Carrot juice",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Cereal party mix, commercial",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Cheese balls, puffs, twists",
    "serving": "1 oz",
    "totalFiber": "1.40",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Chicken with vegetables, undiluted",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Cocoa Comets (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Corn chip",
    "serving": "1 oz",
    "totalFiber": "1.40",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Flour, white, all-purpose",
    "serving": "1 cup",
    "totalFiber": "3.40",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Frosted Flakes (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Morning Traditions Blueberry Morning (Post)",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Nectarine",
    "serving": "1 medium",
    "totalFiber": "2.20",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Onion, (French), undiluted",
    "serving": "1 cup",
    "totalFiber": "3.10",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Pasta, noodles, rice, cooked",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Peppers, hot chili, green, raw",
    "serving": "1 cup",
    "totalFiber": "2.30",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Peppers, hot chili, red, raw",
    "serving": "1 cup",
    "totalFiber": "2.30",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Pickles, bread-and-butter",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Pickles, dill",
    "serving": "1 cup",
    "totalFiber": "1.70",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Radish, raw",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Squash, zucchini, cooked",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Tomato, canned",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Wheaties (General Mills)",
    "serving": "1 cup",
    "totalFiber": "2.10",
    "insolubleFiber": "1.40"
  },
  {
    "name": "Apple Zaps (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Bamboo shoots, canned",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Cabbage, green, raw",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Celery, raw",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Chocolate-covered toffee with nuts",
    "serving": "1 oz",
    "totalFiber": "1.50",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Cocoa Blasts (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Cream of celery, undiluted",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Erewhon Apple Stroodle (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Erewhon Banana-O’s (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "2.10",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Fruitangy Oh’s (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Mandarin orange, canned, syrup",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Orange",
    "serving": "1 medium",
    "totalFiber": "3.10",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Papaya",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Peppers, hot chili, red, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "2.10",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Pickles, sweet gherkins",
    "serving": "1 cup",
    "totalFiber": "1.70",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Prune juice",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Puffed Kamut (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Rolls, hamburger, wheat",
    "serving": "1 medium",
    "totalFiber": "1.80",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Salted nut roll",
    "serving": "1 oz",
    "totalFiber": "1.60",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Toasty O’s (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Tomato, orange, raw",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Yogurt-covered almonds",
    "serving": "1 oz",
    "totalFiber": "1.40",
    "insolubleFiber": "1.30"
  },
  {
    "name": "Apple & Cinnamon Toasty O’s (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "2.20",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Betty Crocker Cinnamon Streusel (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Candy-coated almonds",
    "serving": "1 oz",
    "totalFiber": "1.30",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Golden Grahams (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Grainfield’s Brown Rice (Weetabix)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Kale, cooked",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Pasta, noodles, cellophane, cooked",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Pasta, noodles, chow fun rice, cooked",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Peach",
    "serving": "1 medium",
    "totalFiber": "2.00",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Peppers, jalapeno, canned",
    "serving": "1 cup",
    "totalFiber": "3.50",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Plum",
    "serving": "1 medium",
    "totalFiber": "2.50",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Plum, canned, heavy syrup",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Potato, boiled, without skin",
    "serving": "1 cup",
    "totalFiber": "2.80",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Puffed Wheat (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Squash, summer (green or yellow) raw",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Tapioca",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Tortilla, corn",
    "serving": "1 each",
    "totalFiber": "1.40",
    "insolubleFiber": "1.20"
  },
  {
    "name": "Alpha-Bits (Post)",
    "serving": "1 cup",
    "totalFiber": "1.70",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Apple Cinnamon Cheerios (General Mills)",
    "serving": "1 cup",
    "totalFiber": "2.10",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Cap’n Crunch (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Clam chowder, Manhattan, undiluted",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Cornbread",
    "serving": "1 slice",
    "totalFiber": "1.30",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Crispy Puffs (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Erewhon Crispy Brown Rice (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Flour, baking mix",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Flour, cake or pastry",
    "serving": "1 cup",
    "totalFiber": "2.30",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Golden Puffs (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Honey & Nut Toasty O’s (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Muffins, English, white",
    "serving": "1 each",
    "totalFiber": "1.50",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Onion, white, yellow, or red, raw",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Peppers, yellow – sweet, cooked",
    "serving": "1 cup",
    "totalFiber": "1.70",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Rolls, cracked wheat",
    "serving": "1 medium",
    "totalFiber": "1.50",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Rolls, multigrain",
    "serving": "1 medium",
    "totalFiber": "1.50",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Rolls, wheat",
    "serving": "1 medium",
    "totalFiber": "1.50",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Tahini (sesame butter)",
    "serving": "1 Tbsp",
    "totalFiber": "1.40",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Vegetable beef, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Waffle Crisp (Post)",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "1.10"
  },
  {
    "name": "Bagel, oat bran",
    "serving": "1 medium",
    "totalFiber": "2.00",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Beet greens, raw",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Betty Crocker Dutch Apple (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Broccoflower (green cauliflower), raw",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Cabbage, red, raw",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Cantaloupe",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Cap’n Crunch’s Crunch Berries (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.10",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Celeriac or celery root, cooked",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Cherries, maraschino",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Chocolate-covered peanuts",
    "serving": "1 oz",
    "totalFiber": "1.30",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Chocolate-covered raisins",
    "serving": "1 oz",
    "totalFiber": "1.20",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Corn Chex (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.10",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Erewhon Poppets (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Frosted Toasty O’s (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Fruit cocktail, canned, heavy syrup",
    "serving": "1 cup",
    "totalFiber": "2.50",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Fruit cocktail, canned, juice pack",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Grapes",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Halvah, plain",
    "serving": "1 oz",
    "totalFiber": "1.30",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Honey Bunches of Oats Honey Roasted (Post)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Honey Bunches of Oats with Almonds (Post)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Honey Nut Cheerios (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Muffins, corn",
    "serving": "1 medium",
    "totalFiber": "1.20",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Pasta, noodles, egg, cooked",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Potato, canned",
    "serving": "1 cup",
    "totalFiber": "4.50",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Rolls, pumpernickel",
    "serving": "1 medium",
    "totalFiber": "2.10",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Rolls, rye",
    "serving": "1 medium",
    "totalFiber": "2.10",
    "insolubleFiber": "1.00"
  },
  {
    "name": "S’Mores Grahams (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.10",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Scallions or spring onions, raw",
    "serving": "1 cup",
    "totalFiber": "2.60",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Smacks (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Squash, spaghetti, cooked",
    "serving": "1 cup",
    "totalFiber": "2.20",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Tortilla, white flour",
    "serving": "1 each",
    "totalFiber": "1.40",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Wheat, sprouted",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "1.00"
  },
  {
    "name": "Bread, raisin",
    "serving": "1 slice",
    "totalFiber": "1.10",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Cassava (yuca), cooked",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Chinese vegetables, canned",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Clam chowder, New England, undiluted",
    "serving": "1 cup",
    "totalFiber": "2.10",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Corn Bursts (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Corn Flakes (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Croutons",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Granola bars, chocolate-covered",
    "serving": "1 bar",
    "totalFiber": "1.20",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Hot dogs, frankfurters or weiners substitute-meatless",
    "serving": "1 oz",
    "totalFiber": "1.70",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Mix ‘N Eat Cream of Wheat, flavored",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Pasta, noodles, Chinese, soft type, cooked",
    "serving": "1 cup",
    "totalFiber": "2.30",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Peppers, red – sweet, cooked",
    "serving": "1 cup",
    "totalFiber": "2.20",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Sweet Crunch (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Tomato, yellow, raw",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.90"
  },
  {
    "name": "Bagel, plain",
    "serving": "1 medium",
    "totalFiber": "1.30",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Beans, wax or yellow, canned",
    "serving": "1 cup",
    "totalFiber": "1.70",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Bread, wheat",
    "serving": "1 slice",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Candy-coated peanuts and chocolate",
    "serving": "1 oz",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Chocolate-covered caramel and peanuts",
    "serving": "1 oz",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Erewhon Aztec (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Erewhon Crispy Brown Rice, No Salt (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Frosted Cheerios (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Granola bars, plain",
    "serving": "1 bar",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Honey Crunch Corn Flakes (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.90",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Honey Graham Oh’s (Quaker)",
    "serving": "1 cup",
    "totalFiber": "0.90",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Kumquat",
    "serving": "1 medium",
    "totalFiber": "1.30",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Milk chocolate with peanuts",
    "serving": "1 oz",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Milk chocolate, plain",
    "serving": "1 oz",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Onion, white, yellow, or red, cooked",
    "serving": "1 cup",
    "totalFiber": "2.90",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Papaya juice",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Peppers, hot chili, green, canned",
    "serving": "1 cup",
    "totalFiber": "2.40",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Peppers, yellow – sweet, raw",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Pomegranate",
    "serving": "1 medium",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Rolls, hamburger, white",
    "serving": "1 medium",
    "totalFiber": "1.20",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Rolls, hard",
    "serving": "1 medium",
    "totalFiber": "1.20",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Rolls, hot dog",
    "serving": "1 each",
    "totalFiber": "1.20",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Rolls, Kaiser",
    "serving": "1 medium",
    "totalFiber": "1.20",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Squash, zucchini, raw",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Sunflower butter",
    "serving": "1 Tbsp",
    "totalFiber": "1.30",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Taco shell, hard",
    "serving": "1 each",
    "totalFiber": "1.00",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Tomato, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "1.10",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Watermelon",
    "serving": "1 cup",
    "totalFiber": "1.40",
    "insolubleFiber": "0.80"
  },
  {
    "name": "Almond paste",
    "serving": "1 Tbsp",
    "totalFiber": "0.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Body Buddies (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.90",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Bread, cracked wheat",
    "serving": "1 slice",
    "totalFiber": "1.00",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Bread, oat bran",
    "serving": "1 slice",
    "totalFiber": "1.10",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Bread, pumpernickel",
    "serving": "1 slice",
    "totalFiber": "1.50",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Bread, rye (light or dark)",
    "serving": "1 slice",
    "totalFiber": "1.50",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Cap’n Crunch’s Peanut Butter Crunch (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Carob-coated peanuts",
    "serving": "1 oz",
    "totalFiber": "1.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Carrots, canned",
    "serving": "1 cup",
    "totalFiber": "2.20",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Chicken with vegetables, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Chocolate-covered peanut butter",
    "serving": "1 oz",
    "totalFiber": "0.90",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Clam chowder, New England, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "1.60",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Corn Flakes (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Creamed wheat, regular",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Frosted Flakes K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Fruit bar",
    "serving": "1 bar",
    "totalFiber": "1.50",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Granola bars, peanut butter",
    "serving": "1 bar",
    "totalFiber": "1.20",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Honey Nut Oats (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Honeydew melon",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Kaboom (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Lettuce, iceberg",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Marshmallow Blasted Froot Loops K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Marshmallow Safari (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Milk chocolate with cereal",
    "serving": "1 oz",
    "totalFiber": "0.90",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Mushrooms, raw",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Pasta, macaroni noodles, white, cooked",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Pasta, noodles, chow mein, crisp type",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Pasta, spaghetti noodles, white, cooked",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Peanut butter",
    "serving": "1 Tbsp",
    "totalFiber": "1.00",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Peppers, green – sweet, cooked",
    "serving": "1 cup",
    "totalFiber": "2.20",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Peppers, hot chili, green, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "2.00",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Product 19 (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Rolls, oat bran",
    "serving": "1 medium",
    "totalFiber": "1.50",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Rolls, white",
    "serving": "1 medium",
    "totalFiber": "1.10",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Tootie Fruities (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.70"
  },
  {
    "name": "Bridge mix",
    "serving": "1 oz",
    "totalFiber": "0.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Candy-coated chocolate",
    "serving": "1 oz",
    "totalFiber": "0.70",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Cereal bar",
    "serving": "1 bar",
    "totalFiber": "1.00",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Chocolate-covered caramel, peanuts and nougat",
    "serving": "1 oz",
    "totalFiber": "0.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Chocolate-covered toffee",
    "serving": "1 oz",
    "totalFiber": "0.70",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Clam chowder, Manhattan, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Cream of broccoli, undiluted",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Creamed wheat, instant",
    "serving": "1 cup",
    "totalFiber": "1.10",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Cucumber, raw, with or without peel",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Endive (curly), raw",
    "serving": "1 cup",
    "totalFiber": "0.90",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Frosted Oats (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.10",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Grainfield’s Crispy Rice (Weetabix)",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.60"
  },
  {
    "name": "King Vitaman (Quaker)",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Kohlrabi, cooked",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Lemon",
    "serving": "1 medium",
    "totalFiber": "1.60",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Lettuce, romaine or cos",
    "serving": "1 cup",
    "totalFiber": "0.90",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Lucky Charms (General Mills)",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Marshmallow Alpha-Bits (Post)",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Marshmallow Mateys (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "1.20",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Muffins, oat bran or oatmeal",
    "serving": "1 medium",
    "totalFiber": "1.20",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Oreo O’s (Post)",
    "serving": "1 cup",
    "totalFiber": "0.90",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Peppers, hot chili, red, canned",
    "serving": "1 cup",
    "totalFiber": "1.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Potato, baked, without skin",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Puffed Wheat (Quaker)",
    "serving": "1 cup",
    "totalFiber": "1.10",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Rice Chex (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Special K (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.90",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Spinach, raw",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Sprouts, alfalfa",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Trix (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.60"
  },
  {
    "name": "Almond butter",
    "serving": "1 Tbsp",
    "totalFiber": "0.60",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Bagel chip",
    "serving": "1 oz",
    "totalFiber": "1.00",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Bagel, egg",
    "serving": "1 medium",
    "totalFiber": "1.30",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Beef with noodles or pasta, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Black currant juice",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Bread, focaccia",
    "serving": "1 slice",
    "totalFiber": "1.20",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Bread, oatmeal",
    "serving": "1 slice",
    "totalFiber": "1.10",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Chicken with rice, undiluted",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Cocoa Pebbles (Post)",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Cocoa powder, unsweetened",
    "serving": "1 tsp",
    "totalFiber": "0.60",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Collards, raw",
    "serving": "1 cup",
    "totalFiber": "1.30",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Crispix (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Crispy Rice (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Fruity Pebbles (Post)",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Grapefruit, canned, water pack",
    "serving": "1 cup",
    "totalFiber": "2.80",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Grapefruit, white, pink or red",
    "serving": "1 medium",
    "totalFiber": "2.80",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Malted milk balls",
    "serving": "1 oz",
    "totalFiber": "1.00",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Muffins, blueberry",
    "serving": "1 medium",
    "totalFiber": "0.90",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Muffins, carrot",
    "serving": "1 medium",
    "totalFiber": "1.00",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Passion fruit",
    "serving": "1 medium",
    "totalFiber": "1.90",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Pita, white",
    "serving": "1 medium",
    "totalFiber": "1.00",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Rice, white, instant (precoooked), cooked",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Rice, white, parboiled (converted), cooked",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Rice, white, regular cooking, cooked",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Rolls, French or Vienna",
    "serving": "1 medium",
    "totalFiber": "1.20",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Rolls, oatmeal",
    "serving": "1 medium",
    "totalFiber": "1.10",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Sprouts, mung bean, canned",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Toaster pastry or Pop-Tart",
    "serving": "1 each",
    "totalFiber": "1.10",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Tomato juice",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Total Corn Flakes (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.50"
  },
  {
    "name": "Apple Jacks K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Bacon bits, textured vegetable protein",
    "serving": "1 Tbsp",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Beef with noodles or pasta, undiluted",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Booberry (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Bread, Hovis",
    "serving": "1 slice",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Carob-coated raisins",
    "serving": "1 oz",
    "totalFiber": "0.70",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Chicken with noodles, ready-to-serve can, chunky",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Chicken with noodles, undiluted",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Chinese cabbage, Pak-choi, raw",
    "serving": "1 cup",
    "totalFiber": "0.70",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Chocolate-covered caramel and nougat",
    "serving": "1 oz",
    "totalFiber": "0.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Chocolate-covered cream",
    "serving": "1 oz",
    "totalFiber": "0.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Chocolate-covered fondant",
    "serving": "1 oz",
    "totalFiber": "0.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Cocoa Krispies K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Count Chocula (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Cream of mushroom, undiluted",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Croissant",
    "serving": "1 medium",
    "totalFiber": "0.90",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Danish pastry",
    "serving": "1 medium",
    "totalFiber": "1.00",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Doughnut, raised or yeast",
    "serving": "1 medium",
    "totalFiber": "0.90",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Erewhon Corn Flakes (U.S. Mills)",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Frankenberry (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Froot Loops K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Grapefruit, canned, syrup pack",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Grits",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Kix (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Matzo, plain",
    "serving": "1 each",
    "totalFiber": "0.80",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Matzo, whole wheat",
    "serving": "1 each",
    "totalFiber": "0.80",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Mix ‘N Eat Cream of Wheat, plain",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Pancake, white flour, frozen",
    "serving": "1 medium",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Peach nectar",
    "serving": "1 cup",
    "totalFiber": "1.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Puffed Rice (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Reese’s Peanut Butter Puffs (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Rolls, sourdough",
    "serving": "1 medium",
    "totalFiber": "1.20",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Scone",
    "serving": "1 medium",
    "totalFiber": "0.70",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Sprouts, mung bean, cooked fresh",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Sprouts, soybean, raw",
    "serving": "1 cup",
    "totalFiber": "0.80",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Sweet roll",
    "serving": "1 medium",
    "totalFiber": "1.10",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Vegetable burger",
    "serving": "1 oz",
    "totalFiber": "0.70",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Waffles, white flour, home recipe – 7″",
    "serving": "1 each",
    "totalFiber": "1.00",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Yogurt-covered raisins",
    "serving": "1 oz",
    "totalFiber": "0.60",
    "insolubleFiber": "0.40"
  },
  {
    "name": "Berry Colossal Crunch (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Bread, cinnamon swirl",
    "serving": "1 slice",
    "totalFiber": "0.60",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Bread, French",
    "serving": "1 slice",
    "totalFiber": "0.70",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Bread, sourdough",
    "serving": "1 slice",
    "totalFiber": "0.70",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Bread, white",
    "serving": "1 slice",
    "totalFiber": "0.60",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Breadsticks, bread type",
    "serving": "1 medium",
    "totalFiber": "0.90",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Carob",
    "serving": "1 oz",
    "totalFiber": "1.10",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Coffeecake, quick-bread, crumb type",
    "serving": "1 slice",
    "totalFiber": "0.90",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Corn Pops K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Country Corn Flakes (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Cream of onion, undiluted",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Cream of rice",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Dill seed",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Double Chex (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "French toast",
    "serving": "1 slice",
    "totalFiber": "0.60",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Fruit leather or rolls",
    "serving": "1 oz",
    "totalFiber": "0.50",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Matzo, egg",
    "serving": "1 each",
    "totalFiber": "0.80",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Orange juice",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Pancake, white flour, mix",
    "serving": "1 medium",
    "totalFiber": "0.50",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Pineapple juice",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Popcorn cake",
    "serving": "1 each",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Popover",
    "serving": "1 each",
    "totalFiber": "0.60",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Post Toasties (Post)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Puffed Corn (Arrowhead Mills)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Puffed Rice (Malt-O-Meal)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Rice Krispies Treats (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Yogurt-covered peanuts",
    "serving": "1 oz",
    "totalFiber": "0.40",
    "insolubleFiber": "0.30"
  },
  {
    "name": "Rye wafer, seasoned",
    "serving": "1 each",
    "totalFiber": "0.50",
    "insolubleFiber": "0.25"
  },
  {
    "name": "Apple juice",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Biscuit, baking powder, buttermilk",
    "serving": "1 medium",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Bread, cheese",
    "serving": "1 slice",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Bread, egg",
    "serving": "1 slice",
    "totalFiber": "0.40",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Bread, Italian",
    "serving": "1 slice",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Carob powder",
    "serving": "1 tsp",
    "totalFiber": "0.90",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Cashew butter",
    "serving": "1 Tbsp",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Chicken with noodles, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Chicken with rice, ready-to-serve can",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Chocolate-covered caramel",
    "serving": "1 oz",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Chocolate-covered cherry",
    "serving": "1 oz",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Chocolate-covered marshmallow",
    "serving": "1 oz",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Cocoa Frosted Flakes K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Coffeecake, yeast type",
    "serving": "1 slice",
    "totalFiber": "0.60",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Cranberry juice",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Cream of chicken, undiluted",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Crepe, plain",
    "serving": "1 slice",
    "totalFiber": "0.40",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Doughnut, cake",
    "serving": "1 medium",
    "totalFiber": "0.60",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Golden Crisp (Post)",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Grapefruit juice",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Honeycomb (Post)",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Lemon juice",
    "serving": "1 cup",
    "totalFiber": "1.00",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Licorice",
    "serving": "1 oz",
    "totalFiber": "0.40",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Miso (soybean paste)",
    "serving": "1 tsp",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Passion fruit juice",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Puffed Rice (Quaker)",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Radicchio, raw",
    "serving": "1 cup",
    "totalFiber": "0.40",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Rice Krispies K-sentials (Kellogg’s)",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Rolls, crescent (refrigerated dough)",
    "serving": "1 each",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Waffles, white flour, frozen – 4″",
    "serving": "1 each",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Watercress, raw",
    "serving": "1 cup",
    "totalFiber": "0.50",
    "insolubleFiber": "0.20"
  },
  {
    "name": "Berry Berry Kix (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Bread crumbs, plain",
    "serving": "1 Tbsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Breakfast strips, textured vegetable protein",
    "serving": "1 strip",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Canadian-style bacon, soy product",
    "serving": "1 oz",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Catsup",
    "serving": "1 Tbsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Cheese, undiluted",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Cocoa Puffs (General Mills)",
    "serving": "1 cup",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Cranapple juice",
    "serving": "1 cup",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Crispbread – rye",
    "serving": "1 each",
    "totalFiber": "0.30",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Dill weed, dried",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Flatbread",
    "serving": "1 each",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Garlic powder",
    "serving": "1 tsp",
    "totalFiber": "0.30",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Olives, black",
    "serving": "1 medium",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Olives, green",
    "serving": "1 medium",
    "totalFiber": "0.10",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Olives, stuffed",
    "serving": "1 medium",
    "totalFiber": "0.10",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Onion powder",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Parsley (dried)",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Pimento",
    "serving": "1 Tbsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Rye wafer, plain",
    "serving": "1 each",
    "totalFiber": "0.30",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Sausage, breakfast or brown-and-serve, substitute-meatless, link",
    "serving": "1oz",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Sausage, breakfast or brown-and-serve, substitute-meatless, patty",
    "serving": "1 oz",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Textured vegetable protein, from frozen",
    "serving": "1 oz",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Tofu (soybean curd)",
    "serving": "1 oz",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Whole wheat",
    "serving": "1 each",
    "totalFiber": "0.20",
    "insolubleFiber": "0.10"
  },
  {
    "name": "Saltine, white",
    "serving": "1 each",
    "totalFiber": "0.12",
    "insolubleFiber": "0.08"
  },
  {
    "name": "Saltine, whole wheat",
    "serving": "1 each",
    "totalFiber": "0.11",
    "insolubleFiber": "0.07"
  },
  {
    "name": "Wheat",
    "serving": "1 each",
    "totalFiber": "0.09",
    "insolubleFiber": "0.07"
  },
  {
    "name": "Chives, raw",
    "serving": "1 Tbsp",
    "totalFiber": "0.07",
    "insolubleFiber": "0.05"
  },
  {
    "name": "Melba toast",
    "serving": "1 each",
    "totalFiber": "0.13",
    "insolubleFiber": "0.05"
  },
  {
    "name": "Cheese",
    "serving": "1 each",
    "totalFiber": "0.07",
    "insolubleFiber": "0.04"
  },
  {
    "name": "Coriander, leaf, fresh or dried",
    "serving": "1 Tbsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.03"
  },
  {
    "name": "Oyster",
    "serving": "1 each",
    "totalFiber": "0.04",
    "insolubleFiber": "0.03"
  },
  {
    "name": "Zwieback",
    "serving": "1 each",
    "totalFiber": "0.08",
    "insolubleFiber": "0.03"
  },
  {
    "name": "Butter",
    "serving": "1 each",
    "totalFiber": "0.05",
    "insolubleFiber": "0.02"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Allspice",
    "serving": "1 tsp",
    "totalFiber": "0.40",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Anise seed",
    "serving": "1 tsp",
    "totalFiber": "0.30",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Basil (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.60",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Basil, fresh",
    "serving": "1 Tbsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Bay leaf",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Caramel, plain",
    "serving": "1 oz",
    "totalFiber": "0.30",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Caraway seed",
    "serving": "1 tsp",
    "totalFiber": "0.90",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Cardamom (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Celery seed",
    "serving": "1 tsp",
    "totalFiber": "0.30",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Chervil (dried)",
    "serving": "1 tsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Chili powder",
    "serving": "1 tsp",
    "totalFiber": "0.80",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Cinnamon (ground)",
    "serving": "1 tsp",
    "totalFiber": "1.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Cloves (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.80",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Coriander seed",
    "serving": "1 tsp",
    "totalFiber": "0.70",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Cumin seed",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Curry powder",
    "serving": "1 tsp",
    "totalFiber": "0.70",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Dill weed, fresh",
    "serving": "1 Tbsp",
    "totalFiber": "0.00",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Fennel seed",
    "serving": "1 tsp",
    "totalFiber": "0.70",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Fenugreek seed",
    "serving": "1 tsp",
    "totalFiber": "0.90",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Fried pork rinds",
    "serving": "1 oz",
    "totalFiber": "0.00",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Fruit snacks",
    "serving": "1 oz",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Garlic, fresh",
    "serving": "1 tsp",
    "totalFiber": "0.06",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Ginger (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Ginger root, raw",
    "serving": "1 cup",
    "totalFiber": "1.90",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Grape juice",
    "serving": "1 cup",
    "totalFiber": "0.30",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Hamburger/ground beef substitute-meatless",
    "serving": "1 oz",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Hearts of palm, canned",
    "serving": "1 cup",
    "totalFiber": "3.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Hot chili pepper, red (dried), with seeds",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Hot chili pepper, red (dried), without seeds",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Mace (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.40",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Marjoram (dried)",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Marshmallow",
    "serving": "1 cup",
    "totalFiber": "0.00",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Mustard",
    "serving": "1 tsp",
    "totalFiber": "0.20",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Mustard powder",
    "serving": "1 tsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Nutmeg",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Oregano (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.60",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Paprika",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Parsley, fresh",
    "serving": "1 Tbsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Pepper (ground), black",
    "serving": "1 tsp",
    "totalFiber": "0.60",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Pepper (ground), red",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Pepper (ground), white",
    "serving": "1 tsp",
    "totalFiber": "0.60",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Peppers, hot chili, sun-dried",
    "serving": "1 cup",
    "totalFiber": "10.60",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Poppy seeds",
    "serving": "1 cup",
    "totalFiber": "14.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Rosemary, dried",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Rosemary, fresh",
    "serving": "1 tsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Saffron",
    "serving": "1 tsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Sage (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.30",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Savory (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.70",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Tarragon (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.10",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Thyme (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Thyme, fresh",
    "serving": "1 tsp",
    "totalFiber": "0.30",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Turmeric (ground)",
    "serving": "1 tsp",
    "totalFiber": "0.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Wheat, gluten",
    "serving": "1 cup",
    "totalFiber": "12.40",
    "insolubleFiber": "0.00"
  },
  {
    "name": "White chocolate",
    "serving": "1 oz",
    "totalFiber": "0.00",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  },
  {
    "name": "Yeast, baking – active dry",
    "serving": "1 Tbsp",
    "totalFiber": "2.50",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Yeast, baking – compressed",
    "serving": "1 cake",
    "totalFiber": "1.40",
    "insolubleFiber": "0.00"
  },
  {
    "name": "Yeast, Brewers",
    "serving": "1 Tbsp",
    "totalFiber": "3.00",
    "insolubleFiber": "0.00"
  },
  {
    "name": "",
    "serving": "",
    "totalFiber": "",
    "insolubleFiber": ""
  }
]
