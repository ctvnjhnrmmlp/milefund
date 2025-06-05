import { Input } from '@workspace/ui/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';
import { Search } from 'lucide-react';
import ProjectCard from '../compounds/project-card';

export default function ViewProjects() {
  const projects = [
    {
      id: '1',
      title: 'Clean Water Initiative',
      organization: 'Cabuyao Environmental NGO',
      description:
        'Providing clean water access to underserved communities in Cabuyao.',
      raised: 2.4,
      goal: 5,
      backers: 48,
      milestones: 3,
      completedMilestones: 1,
      image: '/placeholder.svg?height=200&width=400',
      category: 'Environment',
    },
    {
      id: '2',
      title: 'Youth Education Program',
      organization: 'Cabuyao Learning Foundation',
      description:
        'Supporting educational resources for underprivileged youth in local communities.',
      raised: 3.8,
      goal: 4,
      backers: 72,
      milestones: 4,
      completedMilestones: 2,
      image: '/placeholder.svg?height=200&width=400',
      category: 'Education',
    },
    {
      id: '3',
      title: 'Community Health Clinic',
      organization: 'Cabuyao Health Alliance',
      description:
        'Establishing a community clinic to provide basic healthcare services.',
      raised: 1.2,
      goal: 8,
      backers: 26,
      milestones: 5,
      completedMilestones: 1,
      image: '/placeholder.svg?height=200&width=400',
      category: 'Healthcare',
    },
    {
      id: '4',
      title: 'Elderly Care Program',
      organization: 'Cabuyao Senior Citizens Support',
      description:
        'Providing care and support services for elderly residents in Cabuyao.',
      raised: 0.8,
      goal: 3,
      backers: 15,
      milestones: 3,
      completedMilestones: 0,
      image: '/placeholder.svg?height=200&width=400',
      category: 'Social Welfare',
    },
    {
      id: '5',
      title: 'Local Arts & Culture Festival',
      organization: 'Cabuyao Cultural Society',
      description:
        'Organizing a festival to celebrate and preserve local arts, music, and cultural heritage.',
      raised: 1.5,
      goal: 2.5,
      backers: 34,
      milestones: 2,
      completedMilestones: 1,
      image: '/placeholder.svg?height=200&width=400',
      category: 'Arts & Culture',
    },
    {
      id: '6',
      title: 'Disaster Preparedness Training',
      organization: 'Cabuyao Resilience Network',
      description:
        'Training local communities on disaster preparedness and emergency response.',
      raised: 2.1,
      goal: 4,
      backers: 42,
      milestones: 4,
      completedMilestones: 2,
      image: '/placeholder.svg?height=200&width=400',
      category: 'Disaster Relief',
    },
  ];

  return (
    <div className='container px-4 py-12 md:px-6 md:py-16 mx-auto'>
      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>
        Explore Projects
      </h1>

      {/* Filters */}
      <div className='flex flex-col md:flex-row gap-4 mb-8'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
          <Input placeholder='Search projects...' className='pl-10' />
        </div>
        <div className='flex gap-4'>
          <Select defaultValue='all'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Categories</SelectItem>
              <SelectItem value='environment'>Environment</SelectItem>
              <SelectItem value='education'>Education</SelectItem>
              <SelectItem value='healthcare'>Healthcare</SelectItem>
              <SelectItem value='social'>Social Welfare</SelectItem>
              <SelectItem value='arts'>Arts & Culture</SelectItem>
              <SelectItem value='disaster'>Disaster Relief</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue='newest'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='newest'>Newest</SelectItem>
              <SelectItem value='popular'>Most Popular</SelectItem>
              <SelectItem value='funded'>Most Funded</SelectItem>
              <SelectItem value='ending'>Ending Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
