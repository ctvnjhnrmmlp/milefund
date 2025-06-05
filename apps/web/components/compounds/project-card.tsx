import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@workspace/ui/components/card';
import { Progress } from '@workspace/ui/components/progress';
import { CheckCircle, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  organization: string;
  description: string;
  raised: number;
  goal: number;
  backers: number;
  milestones: number;
  completedMilestones: number;
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const percentComplete = (project.raised / project.goal) * 100;

  return (
    <Card className='overflow-hidden transition-all hover:shadow-md'>
      <div className='relative'>
        <Image
          src='https://images.unsplash.com/photo-1568733873715-f9d497a47ea0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width={400}
          height={200}
          className='w-full h-48 object-cover pointer-events-none'
          alt='Project Image'
          unoptimized
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
          loading='lazy'
          placeholder='blur'
          blurDataURL='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjwvc3Zn'
        />
        <Badge className='absolute top-3 right-3'>{project.category}</Badge>
      </div>
      <CardHeader className='pb-2'>
        <div className='flex justify-between items-start'>
          <div>
            <h3 className='text-xl font-bold'>{project.title}</h3>
            <p className='text-sm text-gray-500'>{project.organization}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p className='text-gray-600 line-clamp-2'>{project.description}</p>

        <div className='space-y-2'>
          <div className='flex justify-between text-sm'>
            <span className='font-medium'>{project.raised} ETH raised</span>
            <span className='text-gray-500'>Goal: {project.goal} ETH</span>
          </div>
          <Progress value={percentComplete} className='h-2' />
        </div>

        <div className='flex justify-between text-sm pt-2'>
          <div className='flex items-center gap-1'>
            <Users className='h-4 w-4 text-gray-500' />
            <span>{project.backers} backers</span>
          </div>
          <div className='flex items-center gap-1'>
            <CheckCircle className='h-4 w-4' />
            <span>
              {project.completedMilestones}/{project.milestones} milestones
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/projects/${project.id}`} className='w-full'>
          <Button className='w-full hover:bg-blue-700'>View Project</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
