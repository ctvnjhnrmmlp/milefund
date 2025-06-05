'use client';

import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Progress } from '@workspace/ui/components/progress';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@workspace/ui/components/tabs';
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  FileText,
  Info,
  Link2,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import DonationModal from '../compounds/donation-modal';

export default function ViewProject({ id }: { id?: string }) {
  const [showDonationModal, setShowDonationModal] = useState(false);

  // This would be fetched from an API in a real application
  const project = {
    id: id as string,
    title: 'Clean Water Initiative',
    organization: 'Cabuyao Environmental NGO',
    description:
      'This project aims to provide clean water access to underserved communities in Cabuyao. Through the installation of water filtration systems and community wells, we plan to ensure that every resident has access to safe drinking water. The project will be implemented in phases, with each milestone representing a specific community receiving clean water infrastructure.',
    raised: 2.4,
    goal: 5,
    backers: 48,
    milestones: [
      {
        id: 'm1',
        title: 'Community Assessment & Planning',
        description:
          'Conduct surveys and identify priority areas for water system installation.',
        fundAmount: 0.8,
        status: 'completed',
        completedDate: '2023-12-15',
        verificationProof: '0x8f7d8b9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a',
      },
      {
        id: 'm2',
        title: 'Equipment Procurement',
        description:
          'Purchase water filtration systems and materials for well construction.',
        fundAmount: 1.6,
        status: 'in-progress',
        completedDate: null,
        verificationProof: null,
      },
      {
        id: 'm3',
        title: 'Installation & Community Training',
        description:
          'Install systems and train community members on maintenance.',
        fundAmount: 2.6,
        status: 'pending',
        completedDate: null,
        verificationProof: null,
      },
    ],
    image: '/placeholder.svg?height=400&width=800',
    category: 'Environment',
    createdAt: '2023-11-01',
    endDate: '2024-05-01',
    updates: [
      {
        id: 'u1',
        title: 'Community Assessment Complete',
        content:
          "We've successfully completed our community assessment phase. We identified 3 priority areas that will receive the first water filtration systems. Thank you to all our supporters!",
        date: '2023-12-15',
      },
      {
        id: 'u2',
        title: 'Equipment Procurement Started',
        content:
          "We've begun the process of procuring the necessary equipment for our water filtration systems. The first batch of materials has been ordered and should arrive within the next two weeks.",
        date: '2024-01-10',
      },
    ],
    transactions: [
      {
        id: 'tx1',
        donor: '0x1a2b...3c4d',
        amount: 0.5,
        timestamp: '2023-11-05T14:23:15Z',
        txHash: '0x8f7d8b9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a',
      },
      {
        id: 'tx2',
        donor: '0x5e6f...7g8h',
        amount: 0.8,
        timestamp: '2023-11-12T09:45:30Z',
        txHash: '0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b',
      },
      {
        id: 'tx3',
        donor: '0x9i0j...1k2l',
        amount: 0.3,
        timestamp: '2023-11-20T16:12:45Z',
        txHash: '0x6f5e4d3c2b1a0f9e8d7c6b5a4f3e2d1c0b9a8f7e',
      },
      {
        id: 'tx4',
        donor: '0x3m4n...5o6p',
        amount: 0.8,
        timestamp: '2023-12-03T11:34:22Z',
        txHash: '0x5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6',
      },
    ],
    contractAddress: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
    smartContractUrl:
      'https://etherscan.io/address/0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
  };

  const percentComplete = (project.raised / project.goal) * 100;
  const daysLeft = Math.ceil(
    (new Date(project.endDate).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );

  return (
    <div className='container px-4 py-12 md:px-6 md:py-16 mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Main Content */}
        <div className='lg:col-span-2 space-y-8'>
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <Badge>{project.category}</Badge>
              <span className='text-sm text-gray-500'>
                Created on {new Date(project.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-2'>
              {project.title}
            </h1>
            <p className='text-lg text-gray-500 mb-4'>{project.organization}</p>
            <div className='relative rounded-lg overflow-hidden mb-6'>
              <Image
                src='https://images.unsplash.com/photo-1568733873715-f9d497a47ea0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                width={400}
                height={200}
                className='w-full h-auto object-cover pointer-events-none'
                alt={project.title}
                unoptimized
                sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                loading='lazy'
                placeholder='blur'
                blurDataURL='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIvPjwvc3Zn'
              />
            </div>
          </div>

          <Tabs defaultValue='about'>
            <TabsList className='grid w-full grid-cols-4'>
              <TabsTrigger value='about'>About</TabsTrigger>
              <TabsTrigger value='milestones'>Milestones</TabsTrigger>
              <TabsTrigger value='updates'>Updates</TabsTrigger>
              <TabsTrigger value='transactions'>Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value='about' className='pt-6'>
              <div className='prose max-w-none'>
                <p>{project.description}</p>
                <h3>Project Goals</h3>
                <ul>
                  <li>
                    Provide clean water access to 3 underserved communities
                  </li>
                  <li>Install 15 water filtration systems</li>
                  <li>Train 30 community members on system maintenance</li>
                  <li>Reduce waterborne diseases by 60% in target areas</li>
                </ul>
                <h3>About the Organization</h3>
                <p>
                  Cabuyao Environmental NGO has been working on environmental
                  and community development projects in the region for over 5
                  years. Our team consists of environmental engineers, community
                  organizers, and public health specialists dedicated to
                  improving living conditions in underserved areas.
                </p>
              </div>
            </TabsContent>

            <TabsContent value='milestones' className='pt-6'>
              <div className='space-y-6'>
                {project.milestones.map((milestone, index) => (
                  <Card
                    key={milestone.id}
                    className={`border-l-4 ${
                      milestone.status === 'completed'
                        ? 'border-l-green-500'
                        : milestone.status === 'in-progress'
                          ? 'border-l-blue-500'
                          : 'border-l-gray-300'
                    }`}
                  >
                    <CardContent className='p-6'>
                      <div className='flex items-start justify-between'>
                        <div className='flex items-center gap-3'>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              milestone.status === 'completed'
                                ? 'bg-green-100 text-green-600'
                                : milestone.status === 'in-progress'
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {milestone.status === 'completed' ? (
                              <CheckCircle className='h-5 w-5' />
                            ) : milestone.status === 'in-progress' ? (
                              <Clock className='h-5 w-5' />
                            ) : (
                              <span className='font-bold'>{index + 1}</span>
                            )}
                          </div>
                          <div>
                            <h3 className='font-bold text-lg'>
                              {milestone.title}
                            </h3>
                            <p className='text-sm text-gray-500'>
                              {milestone.status === 'completed' ? (
                                <>
                                  Completed on{' '}
                                  {new Date(
                                    milestone.completedDate!
                                  ).toLocaleDateString()}
                                </>
                              ) : milestone.status === 'in-progress' ? (
                                <>In progress</>
                              ) : (
                                <>Pending</>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className='text-right'>
                          <p className='font-bold'>
                            {milestone.fundAmount} ETH
                          </p>
                          <p className='text-sm text-gray-500'>
                            Allocated funds
                          </p>
                        </div>
                      </div>
                      <p className='mt-4'>{milestone.description}</p>

                      {milestone.status === 'completed' && (
                        <div className='mt-4 flex items-center gap-2 text-sm'>
                          <Info className='h-4 w-4' />
                          <span>Verified on blockchain</span>
                          <a
                            href={`https://etherscan.io/tx/${milestone.verificationProof}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-1 underline'
                          >
                            View proof <ExternalLink className='h-3 w-3' />
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value='updates' className='pt-6'>
              <div className='space-y-6'>
                {project.updates.map((update) => (
                  <Card key={update.id}>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Calendar className='h-4 w-4 text-gray-500' />
                        <span className='text-sm text-gray-500'>
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className='font-bold text-lg mb-2'>{update.title}</h3>
                      <p>{update.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value='transactions' className='pt-6'>
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className='border-b'>
                      <th className='text-left py-3 px-4'>Donor</th>
                      <th className='text-left py-3 px-4'>Amount</th>
                      <th className='text-left py-3 px-4'>Date</th>
                      <th className='text-left py-3 px-4'>Transaction Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.transactions.map((tx) => (
                      <tr key={tx.id} className='border-b hover:bg-gray-50'>
                        <td className='py-3 px-4'>{tx.donor}</td>
                        <td className='py-3 px-4'>{tx.amount} ETH</td>
                        <td className='py-3 px-4'>
                          {new Date(tx.timestamp).toLocaleString()}
                        </td>
                        <td className='py-3 px-4'>
                          <a
                            href={`https://etherscan.io/tx/${tx.txHash}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-1 hover:underline'
                          >
                            {tx.txHash.substring(0, 10)}...
                            <ExternalLink className='h-3 w-3' />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          <Card>
            <CardContent className='p-6 space-y-6'>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='font-bold text-lg'>
                    {project.raised} ETH
                  </span>
                  <span className='text-gray-500'>
                    of {project.goal} ETH goal
                  </span>
                </div>
                <Progress value={percentComplete} className='h-2' />
              </div>

              <div className='grid grid-cols-3 gap-4 text-center'>
                <div>
                  <p className='font-bold'>{project.backers}</p>
                  <p className='text-sm text-gray-500'>Backers</p>
                </div>
                <div>
                  <p className='font-bold'>{daysLeft}</p>
                  <p className='text-sm text-gray-500'>Days Left</p>
                </div>
                <div>
                  <p className='font-bold'>{project.milestones.length}</p>
                  <p className='text-sm text-gray-500'>Milestones</p>
                </div>
              </div>

              <Button
                className='w-full hover:bg-blue-700'
                size='lg'
                onClick={() => setShowDonationModal(true)}
              >
                Donate Now
              </Button>

              <div className='flex items-center justify-center gap-2 text-sm text-gray-500'>
                <AlertCircle className='h-4 w-4' />
                <span>Funds are released based on milestone completion</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6 space-y-4'>
              <h3 className='font-bold text-lg'>Smart Contract Details</h3>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <FileText className='h-4 w-4 text-gray-500' />
                  <span className='text-sm'>Contract Address:</span>
                </div>
                <div className='flex items-center gap-2 bg-gray-50 p-2 rounded-md overflow-hidden'>
                  <code className='text-xs break-all'>
                    {project.contractAddress}
                  </code>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='ml-auto shrink-0'
                  >
                    <Link2 className='h-4 w-4' />
                  </Button>
                </div>
              </div>
              <div className='flex justify-center'>
                <a
                  href={project.smartContractUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm hover:underline flex items-center gap-1'
                >
                  View on Etherscan
                  <ExternalLink className='h-3 w-3' />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6 space-y-4'>
              <h3 className='font-bold text-lg'>Share This Project</h3>
              <div className='flex justify-center gap-4'>
                <Button variant='outline' size='icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'
                  >
                    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                  </svg>
                </Button>
                <Button variant='outline' size='icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'
                  >
                    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                  </svg>
                </Button>
                <Button variant='outline' size='icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'
                  >
                    <rect
                      x='2'
                      y='2'
                      width='20'
                      height='20'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                  </svg>
                </Button>
                <Button variant='outline' size='icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-5 w-5'
                  >
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect x='2' y='9' width='4' height='12'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        projectTitle={project.title}
      />
    </div>
  );
}
