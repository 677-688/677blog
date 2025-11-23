<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: '../cat1.ico',
    name: '677',
    title: 'Creator'
    // links: [
      // { icon: 'github', link: 'https://github.com/yyx990803' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    // ]
  }
]
</script>

# 个人介绍


<VPTeamMembers size="small" :members />