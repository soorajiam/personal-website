<template>
  <div class="skill-game">
    <!-- Game UI -->
    <div v-if="gameActive" class="flex flex-col w-full relative">
      <!-- Game Header -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center gap-4">
          <div :class="gameTimer <= 10 ? 'bg-red-600 timer-warning' : 'bg-red-500'" class="text-white px-3 py-1 rounded-lg font-bold">
            ⏰ Time: {{ gameTimer }}s
          </div>
          <div class="bg-blue-500 text-white px-3 py-1 rounded-lg font-bold">
            🎯 Score: {{ skillScore }}
          </div>
          <div class="bg-yellow-500 text-black px-3 py-1 rounded-lg font-bold">
            🔥 Combo: {{ combo }}x
          </div>
          <div class="bg-green-500 text-white px-3 py-1 rounded-lg font-bold">
            🏆 High: {{ getHighScore() }}
          </div>
        </div>
        <button @click="resetGame" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          🔄 Reset
        </button>
      </div>
      
      <!-- Game Instructions -->
      <p class="font-bold text-xl text-blue-400 mb-4">🎮 Click duplicate skills to score points! Build combos for bonus points!</p>
      
      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Languages -->
        <div class="bg-slate-800 rounded-lg p-4">
          <h3 class="font-bold text-xl text-green-400 mb-2">🌐 Languages</h3>
          <div class="flex flex-wrap gap-2">
            <span @click="selectRepeatingSkill(language[0], 'language')" 
                  :class="language[1] ? 'bg-green-500 text-white scale-110 selected' : 'bg-slate-100 text-black hover:bg-green-100'"  
                  class="cursor-pointer rounded-lg px-3 py-1 transition-all duration-200 font-medium game-skill relative" 
                  v-for="language in visible.languages">
              {{ language[0] }}
              <span v-if="language[2]" class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </span>
          </div>
        </div>
        
        <!-- Frameworks -->
        <div class="bg-slate-800 rounded-lg p-4">
          <h3 class="font-bold text-xl text-blue-400 mb-2">⚡ Frameworks</h3>
          <div class="flex flex-wrap gap-2">
            <span @click="selectRepeatingSkill(framework[0], 'framework')" 
                  :class="framework[1] ? 'bg-blue-500 text-white scale-110 selected' : 'bg-slate-100 text-black hover:bg-blue-100'"  
                  class="cursor-pointer rounded-lg px-3 py-1 transition-all duration-200 font-medium game-skill relative" 
                  v-for="framework in visible.frameworks">
              {{ framework[0] }}
              <span v-if="framework[2]" class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </span>
          </div>
        </div>
        
        <!-- Tools -->
        <div class="bg-slate-800 rounded-lg p-4">
          <h3 class="font-bold text-xl text-purple-400 mb-2">🛠️ Tools</h3>
          <div class="flex flex-wrap gap-2">
            <span @click="selectRepeatingSkill(tool[0], 'tool')" 
                  :class="tool[1] ? 'bg-purple-500 text-white scale-110 selected' : 'bg-slate-100 text-black hover:bg-purple-100'" 
                  class="cursor-pointer rounded-lg px-3 py-1 transition-all duration-200 font-medium game-skill relative" 
                  v-for="tool in visible.tools">
              {{ tool[0] }}
              <span v-if="tool[2]" class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </span>
          </div>
        </div>
        
        <!-- Databases -->
        <div class="bg-slate-800 rounded-lg p-4">
          <h3 class="font-bold text-xl text-orange-400 mb-2">🗄️ Databases</h3>
          <div class="flex flex-wrap gap-2">
            <span @click="selectRepeatingSkill(database[0], 'database')" 
                  :class="database[1] ? 'bg-orange-500 text-white scale-110 selected' : 'bg-slate-100 text-black hover:bg-orange-100'" 
                  class="cursor-pointer rounded-lg px-3 py-1 transition-all duration-200 font-medium game-skill relative" 
                  v-for="database in visible.databases">
              {{ database[0] }}
              <span v-if="database[2]" class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Game Stats Modal -->
    <div v-if="showGameStats" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <h2 class="text-3xl font-bold text-center mb-6">🎉 Game Complete!</h2>
        <div class="space-y-4 text-center">
          <div class="text-2xl font-bold text-green-600">Final Score: {{ totalScore }}</div>
          <div class="text-lg">Max Combo: {{ maxCombo }}x</div>
          <div class="text-lg">Time Bonus: +{{ timeBonus }}</div>
          <div class="text-lg">High Score: {{ getHighScore() }}</div>
        </div>
        <div class="mt-6 flex gap-4">
          <button @click="resetGame" class="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Play Again
          </button>
          <button @click="showGameStats = false" class="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Game state
const skillScore = ref(0);
const gameTimer = ref(30);
const gameActive = ref(false);
const combo = ref(0);
const maxCombo = ref(0);
const gameLevel = ref(1);
const timeBonus = ref(0);
const totalScore = ref(0);
const gameHistory = ref<Array<{score: number, maxCombo: number, date: string, time: string}>>([]);
const showGameStats = ref(false);

// Enhanced skills with more variety and difficulty levels
const languages = ["Python", "JavaScript", "HTML", "CSS", "SQL", "TypeScript", "Java", "C++", "Go", "Rust"];
const frameworks = ["Django", "Vue.js", "Nuxt.js", "Tailwind", "Celery", "React", "Angular", "Express", "Flask", "FastAPI"];
const tools = ["AWS", "Docker", "Selenium", "Git", "GitHub", "Jenkins", "Kubernetes", "Terraform", "Ansible", "Prometheus"];
const databases = ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra", "DynamoDB", "Neo4j"];

const visible = ref({
  languages: [] as [string, boolean, boolean][],
  frameworks: [] as [string, boolean, boolean][],
  tools: [] as [string, boolean, boolean][],
  databases: [] as [string, boolean, boolean][]
});

// Game methods
const initiateShowingSkills = () => {
  if (gameActive.value) return; // Prevent multiple game starts
  
  gameActive.value = true;
  skillScore.value = 0;
  combo.value = 0;
  maxCombo.value = 0;
  timeBonus.value = 0;
  gameTimer.value = 30;
  
  // Clear previous skills
  visible.value.languages = [];
  visible.value.frameworks = [];
  visible.value.tools = [];
  visible.value.databases = [];
  
  // Start timer
  const timerInterval = setInterval(() => {
    if (gameTimer.value > 0) {
      gameTimer.value--;
    } else {
      endGame();
      clearInterval(timerInterval);
    }
  }, 1000);
  
  // Generate skills with duplicates
  generateSkillsWithDuplicates();
};

const generateSkillsWithDuplicates = () => {
  // Helper function to add skills with duplicates
  const addSkillsWithDuplicates = (skillArray: string[], targetArray: [string, boolean, boolean][]) => {
    const skillsToAdd = [...skillArray];
    
    // Add each skill at least once
    skillsToAdd.forEach(skill => {
      targetArray.push([skill, false, false]);
    });
    
    // Add duplicates (30% chance for each skill to have a duplicate)
    skillsToAdd.forEach(skill => {
      if (Math.random() < 0.3) {
        targetArray.push([skill, false, true]); // Mark as duplicate
      }
    });
    
    // Shuffle the array to randomize positions
    for (let i = targetArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [targetArray[i], targetArray[j]] = [targetArray[j], targetArray[i]];
    }
  };
  
  // Add skills with duplicates to each category
  addSkillsWithDuplicates(languages, visible.value.languages);
  addSkillsWithDuplicates(frameworks, visible.value.frameworks);
  addSkillsWithDuplicates(tools, visible.value.tools);
  addSkillsWithDuplicates(databases, visible.value.databases);
};

const selectRepeatingSkill = (skill: string, type: string) => {
  if (!gameActive.value) return;
  
  let skillArray: [string, boolean, boolean][] = [];
  
  switch(type) {
    case 'language':
      skillArray = visible.value.languages;
      break;
    case 'framework':
      skillArray = visible.value.frameworks;
      break;
    case 'tool':
      skillArray = visible.value.tools;
      break;
    case 'database':
      skillArray = visible.value.databases;
      break;
  }
  
  // Check if this skill has duplicates (more than one instance)
  const skillInstances = skillArray.filter(s => s[0] === skill);
  const count = skillInstances.length;
  
  if (count > 1) {
    // Valid match - add points and combo
    combo.value++;
    maxCombo.value = Math.max(maxCombo.value, combo.value);
    
    // Calculate points based on combo and skill type
    let basePoints = 10;
    let comboMultiplier = Math.min(combo.value, 5); // Cap at 5x
    let typeMultiplier = type === 'database' ? 2 : 1; // Databases worth more
    
    let points = basePoints * comboMultiplier * typeMultiplier;
    skillScore.value += points;
    
    // Add time bonus for quick matches
    if (gameTimer.value > 20) {
      timeBonus.value += 5;
      skillScore.value += 5;
    }
    
    // Mark all instances of this skill as selected
    skillArray.forEach(s => {
      if (s[0] === skill) {
        s[1] = true;
      }
    });
    
    // Visual feedback
    showComboEffect();
    
  } else {
    // Wrong selection - reset combo
    combo.value = 0;
    skillScore.value = Math.max(0, skillScore.value - 5); // Penalty for wrong clicks
  }
};

const showComboEffect = () => {
  // Create a temporary combo display
  const comboElement = document.createElement('div');
  comboElement.textContent = `+${combo.value}x COMBO!`;
  comboElement.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-yellow-400 z-50 animate-pulse';
  document.body.appendChild(comboElement);
  
  setTimeout(() => {
    document.body.removeChild(comboElement);
  }, 1000);
};

const endGame = () => {
  gameActive.value = false;
  totalScore.value = skillScore.value + timeBonus.value;
  
  // Save game result
  gameHistory.value.push({
    score: totalScore.value,
    maxCombo: maxCombo.value,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  });
  
  // Keep only last 5 games
  if (gameHistory.value.length > 5) {
    gameHistory.value = gameHistory.value.slice(-5);
  }
  
  showGameStats.value = true;
  
  // Auto-hide stats after 5 seconds
  setTimeout(() => {
    showGameStats.value = false;
  }, 5000);
};

const resetGame = () => {
  gameActive.value = false;
  skillScore.value = 0;
  combo.value = 0;
  maxCombo.value = 0;
  timeBonus.value = 0;
  gameTimer.value = 30;
  showGameStats.value = false;
  
  visible.value.languages = [];
  visible.value.frameworks = [];
  visible.value.tools = [];
  visible.value.databases = [];
};

const getHighScore = () => {
  if (gameHistory.value.length === 0) return 0;
  return Math.max(...gameHistory.value.map(game => game.score));
};

// Expose methods for parent component
defineExpose({
  initiateShowingSkills,
  resetGame,
  gameActive,
  skillScore
});
</script>

<style scoped>
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.game-skill {
  animation: slideInUp 0.3s ease-out;
}

.game-skill:hover {
  animation: pulse 0.3s ease-in-out;
}

.game-skill.selected {
  animation: bounce 0.6s ease-in-out;
}

.combo-effect {
  animation: shake 0.5s ease-in-out;
}

.timer-warning {
  animation: pulse 1s infinite;
}
</style> 