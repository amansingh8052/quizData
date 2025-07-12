 // Quiz data
        const quizData = {
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        answer: "Paris",
                        explanation: "Paris has been the capital of France since the 10th century."
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        answer: "Mars",
                        explanation: "Mars appears red due to iron oxide (rust) on its surface."
                    },
                    {
                        question: "How many continents are there on Earth?",
                        options: ["5", "6", "7", "8"],
                        answer: "7",
                        explanation: "The seven continents are Africa, Antarctica, Asia, Europe, North America, Oceania/Australia, and South America."
                    },
                    {
                        question: "What is the largest mammal in the world?",
                        options: ["Elephant", "Blue Whale", "Giraffe", "White Rhino"],
                        answer: "Blue Whale",
                        explanation: "The blue whale can grow up to 100 feet long and weigh 200 tons."
                    },
                    {
                        question: "Which gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                        answer: "Carbon Dioxide",
                        explanation: "Plants use carbon dioxide for photosynthesis, releasing oxygen as a byproduct."
                    }
                ],
                medium: [
                    {
                        question: "What is the world's most spoken language by native speakers?",
                        options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
                        answer: "Mandarin Chinese",
                        explanation: "Mandarin Chinese has about 1.1 billion native speakers."
                    },
                    {
                        question: "Which country has the most time zones?",
                        options: ["Russia", "USA", "China", "France"],
                        answer: "France",
                        explanation: "France has 12 time zones due to its territories around the world."
                    },
                    {
                        question: "What is the fastest land animal?",
                        options: ["Cheetah", "Pronghorn Antelope", "Lion", "Greyhound"],
                        answer: "Cheetah",
                        explanation: "Cheetahs can reach speeds of 70-75 mph in short bursts."
                    },
                    {
                        question: "Which country is home to the Great Barrier Reef?",
                        options: ["Australia", "Brazil", "Indonesia", "Philippines"],
                        answer: "Australia",
                        explanation: "The Great Barrier Reef is the world's largest coral reef system off the coast of Queensland."
                    },
                    {
                        question: "What is the main ingredient in traditional hummus?",
                        options: ["Lentils", "Chickpeas", "White Beans", "Peas"],
                        answer: "Chickpeas",
                        explanation: "Traditional hummus is made from cooked, mashed chickpeas blended with tahini, olive oil, lemon juice, and garlic."
                    }
                ],
                hard: [
                    {
                        question: "Which of these languages is not one of the official languages of the United Nations?",
                        options: ["Arabic", "Portuguese", "Russian", "Chinese"],
                        answer: "Portuguese",
                        explanation: "The UN has six official languages: Arabic, Chinese, English, French, Russian, and Spanish."
                    },
                    {
                        question: "What is the longest river in the world?",
                        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                        answer: "Nile",
                        explanation: "The Nile is about 4,132 miles long, while the Amazon is about 4,000 miles."
                    },
                    {
                        question: "Which element has the highest melting point of all metals?",
                        options: ["Tungsten", "Platinum", "Titanium", "Iron"],
                        answer: "Tungsten",
                        explanation: "Tungsten melts at 3,422°C (6,191.6°F)."
                    },
                    {
                        question: "Which country has the most islands?",
                        options: ["Indonesia", "Philippines", "Norway", "Sweden"],
                        answer: "Sweden",
                        explanation: "Sweden has about 267,570 islands, though only about 1,000 are inhabited."
                    },
                    {
                        question: "What is the world's tallest building (as of 2023)?",
                        options: ["Shanghai Tower", "Burj Khalifa", "Merdeka 118", "Abraj Al-Bait Clock Tower"],
                        answer: "Burj Khalifa",
                        explanation: "Burj Khalifa in Dubai stands at 828 meters (2,717 feet)."
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What is H2O?",
                        options: ["Carbon Dioxide", "Salt", "Water", "Hydrogen Peroxide"],
                        answer: "Water",
                        explanation: "H2O is the chemical formula for water, with two hydrogen atoms and one oxygen atom."
                    },
                    {
                        question: "Which scientist proposed the theory of relativity?",
                        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
                        answer: "Albert Einstein",
                        explanation: "Einstein published his special theory of relativity in 1905 and general theory in 1915."
                    },
                    {
                        question: "What is the process by which plants make their food?",
                        options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
                        answer: "Photosynthesis",
                        explanation: "Plants convert sunlight, carbon dioxide, and water into glucose and oxygen."
                    },
                    {
                        question: "What is the hardest natural substance on Earth?",
                        options: ["Gold", "Iron", "Diamond", "Platinum"],
                        answer: "Diamond",
                        explanation: "Diamond ranks 10 on the Mohs scale of mineral hardness."
                    },
                    {
                        question: "What is the main gas found in the air we breathe?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                        answer: "Nitrogen",
                        explanation: "Earth's atmosphere is about 78% nitrogen and 21% oxygen."
                    }
                ],
                medium: [
                    {
                        question: "What is the smallest unit of matter?",
                        options: ["Molecule", "Atom", "Cell", "Proton"],
                        answer: "Atom",
                        explanation: "Atoms are the basic building blocks of all matter."
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        answer: "Saturn",
                        explanation: "As of 2023, Saturn has 146 confirmed moons."
                    },
                    {
                        question: "What is the study of fossils called?",
                        options: ["Geology", "Paleontology", "Archaeology", "Anthropology"],
                        answer: "Paleontology",
                        explanation: "Paleontology combines biology and geology to study prehistoric life."
                    },
                    {
                        question: "Which metal is liquid at room temperature?",
                        options: ["Mercury", "Gallium", "Bromine", "Rubidium"],
                        answer: "Mercury",
                        explanation: "Mercury is the only metal that's liquid at standard room temperature."
                    },
                    {
                        question: "What percentage of the human body is water?",
                        options: ["30%", "50%", "60-70%", "80-90%"],
                        answer: "60-70%",
                        explanation: "The average adult human body is about 60% water."
                    }
                ],
                hard: [
                    {
                        question: "Which subatomic particle has a negative charge?",
                        options: ["Proton", "Neutron", "Electron", "Positron"],
                        answer: "Electron",
                        explanation: "Electrons orbit the nucleus and carry a negative electric charge."
                    },
                    {
                        question: "What is the speed of light in a vacuum?",
                        options: ["300,000 km/s", "150,000 km/s", "1,079,252,848 km/h", "Both 1 and 3"],
                        answer: "Both 1 and 3",
                        explanation: "The speed of light is about 300,000 km/s or approximately 1,079,252,848 km/h."
                    },
                    {
                        question: "Which element has the atomic number 1?",
                        options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                        answer: "Hydrogen",
                        explanation: "Hydrogen is the lightest and most abundant element in the universe."
                    },
                    {
                        question: "What is the pH value of pure water?",
                        options: ["0", "7", "10", "14"],
                        answer: "7",
                        explanation: "Pure water at standard conditions has a neutral pH of 7."
                    },
                    {
                        question: "Which scientist discovered penicillin?",
                        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
                        answer: "Alexander Fleming",
                        explanation: "Fleming discovered penicillin in 1928, revolutionizing medicine."
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "In which year did World War II end?",
                        options: ["1943", "1945", "1947", "1949"],
                        answer: "1945",
                        explanation: "World War II ended in 1945 with the surrender of Germany and Japan."
                    },
                    {
                        question: "Who was the first President of the United States?",
                        options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
                        answer: "George Washington",
                        explanation: "Washington served as president from 1789 to 1797."
                    },
                    {
                        question: "Which ancient civilization built the pyramids?",
                        options: ["Greeks", "Romans", "Egyptians", "Aztecs"],
                        answer: "Egyptians",
                        explanation: "The Egyptians built the pyramids as tombs for their pharaohs."
                    },
                    {
                        question: "Which country was the first to send a human to space?",
                        options: ["USA", "China", "Soviet Union (Russia)", "France"],
                        answer: "Soviet Union (Russia)",
                        explanation: "Yuri Gagarin orbited Earth aboard Vostok 1 on April 12, 1961."
                    },
                    {
                        question: "When was the Declaration of Independence signed?",
                        options: ["1774", "1776", "1778", "1780"],
                        answer: "1776",
                        explanation: "The Declaration was adopted by the Continental Congress on July 4, 1776."
                    }
                ],
                medium: [
                    {
                        question: "Which war was fought between the North and South in the United States?",
                        options: ["War of 1812", "Civil War", "Revolutionary War", "Spanish-American War"],
                        answer: "Civil War",
                        explanation: "The American Civil War lasted from 1861 to 1865."
                    },
                    {
                        question: "Who invented the telephone?",
                        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
                        answer: "Alexander Graham Bell",
                        explanation: "Bell was awarded the first US patent for the telephone in 1876."
                    },
                    {
                        question: "What ancient wonder was located in Babylon?",
                        options: ["Pyramids of Giza", "Colossus of Rhodes", "Hanging Gardens", "Lighthouse of Alexandria"],
                        answer: "Hanging Gardens",
                        explanation: "The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World."
                    },
                    {
                        question: "Which empire was ruled by Julius Caesar?",
                        options: ["Greek", "Ottoman", "Roman", "Persian"],
                        answer: "Roman",
                        explanation: "Julius Caesar was a Roman general and statesman who played a critical role in the rise of the Roman Empire."
                    },
                    {
                        question: "What was the name of the ship that carried the Pilgrims to America in 1620?",
                        options: ["Santa Maria", "Mayflower", "Nina", "Pinta"],
                        answer: "Mayflower",
                        explanation: "The Mayflower transported English Pilgrims from Plymouth to the New World."
                    }
                ],
                hard: [
                    {
                        question: "Which medieval ruler attempted to conquer Europe in the 13th century?",
                        options: ["Charlemagne", "Genghis Khan", "Saladin", "Richard the Lionheart"],
                        answer: "Genghis Khan",
                        explanation: "Genghis Khan founded the Mongol Empire, which became the largest contiguous empire in history."
                    },
                    {
                        question: "What was the main cause of the French Revolution?",
                        options: ["Religious conflict", "Economic inequality", "Foreign invasion", "Technological change"],
                        answer: "Economic inequality",
                        explanation: "Economic hardship and resentment against privileged classes fueled the revolution."
                    },
                    {
                        question: "Which ancient civilization developed the concept of zero?",
                        options: ["Greeks", "Romans", "Mayans", "Indians"],
                        answer: "Indians",
                        explanation: "Indian mathematicians developed the concept of zero as early as the 5th century."
                    },
                    {
                        question: "In which year did the Titanic sink?",
                        options: ["1909", "1911", "1912", "1914"],
                        answer: "1912",
                        explanation: "The Titanic sank on April 15, 1912, after hitting an iceberg."
                    },
                    {
                        question: "Which treaty ended World War I?",
                        options: ["Treaty of Versailles", "Treaty of Ghent", "Treaty of Paris", "Treaty of London"],
                        answer: "Treaty of Versailles",
                        explanation: "Signed in 1919, the Treaty of Versailles officially ended WWI."
                    }
                ]
            }
        };
