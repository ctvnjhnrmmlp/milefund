'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@workspace/ui/components/alert';
import { Button } from '@workspace/ui/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@workspace/ui/components/dialog';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@workspace/ui/components/radio-group';
import { Slider } from '@workspace/ui/components/slider';
import { CheckCircle, Info, Wallet } from 'lucide-react';
import { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function DonationModal({
  isOpen,
  onClose,
  projectTitle,
}: DonationModalProps) {
  const [amount, setAmount] = useState(0.1);
  const [donationStep, setDonationStep] = useState<
    'amount' | 'confirm' | 'success'
  >('amount');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = () => {
    setIsProcessing(true);
    // Simulate blockchain transaction
    setTimeout(() => {
      setIsProcessing(false);
      setDonationStep('success');
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    // Reset state after modal is closed
    setTimeout(() => {
      setDonationStep('amount');
      setAmount(0.1);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[425px]'>
        {donationStep === 'amount' && (
          <>
            <DialogHeader>
              <DialogTitle>Donate to {projectTitle}</DialogTitle>
              <DialogDescription>
                Your donation will be securely processed via blockchain and
                released based on project milestones.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='space-y-4'>
                <div className='text-center'>
                  <span className='text-3xl font-bold'>{amount} ETH</span>
                </div>
                <Slider
                  defaultValue={[0.1]}
                  max={2}
                  step={0.1}
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0] ?? 0)}
                  className='py-4'
                />
                <div className='flex justify-between text-sm text-gray-500'>
                  <span>0.1 ETH</span>
                  <span>2 ETH</span>
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='custom-amount'>Or enter custom amount</Label>
                <div className='flex items-center'>
                  <Input
                    id='custom-amount'
                    type='number'
                    step='0.01'
                    min='0.01'
                    value={amount}
                    onChange={(e) =>
                      setAmount(Number.parseFloat(e.target.value) || 0)
                    }
                  />
                  <span className='ml-2'>ETH</span>
                </div>
              </div>

              <Alert>
                <Info className='h-4 w-4' />
                <AlertTitle>Milestone-based release</AlertTitle>
                <AlertDescription>
                  Your funds will be held in a smart contract and released only
                  when project milestones are verified.
                </AlertDescription>
              </Alert>
            </div>
            <DialogFooter>
              <Button variant='outline' onClick={handleClose}>
                Cancel
              </Button>
              <Button
                className='hover:bg-blue-700'
                onClick={() => setDonationStep('confirm')}
                disabled={amount <= 0}
              >
                Continue
              </Button>
            </DialogFooter>
          </>
        )}

        {donationStep === 'confirm' && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm Your Donation</DialogTitle>
              <DialogDescription>
                Please review your donation details and connect your wallet to
                proceed.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='bg-gray-50 p-4 rounded-lg space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Amount:</span>
                  <span className='font-bold'>{amount} ETH</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Project:</span>
                  <span>{projectTitle}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Gas fee (est.):</span>
                  <span>0.002 ETH</span>
                </div>
                <div className='border-t pt-2 flex justify-between'>
                  <span className='font-bold'>Total:</span>
                  <span className='font-bold'>
                    {(amount + 0.002).toFixed(3)} ETH
                  </span>
                </div>
              </div>

              <RadioGroup
                defaultValue='metamask'
                className='grid grid-cols-3 gap-4 pt-2'
              >
                <div className='flex flex-col items-center'>
                  <RadioGroupItem
                    value='metamask'
                    id='metamask'
                    className='sr-only'
                  />
                  <Label
                    htmlFor='metamask'
                    className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
                  >
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M27.5333 3L17.8667 10.8L19.8 6.4L27.5333 3Z'
                        fill='#E17726'
                        stroke='#E17726'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M4.4667 3L14.0667 10.8667L12.2 6.4L4.4667 3Z'
                        fill='#E27625'
                        stroke='#E27625'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M23.8 21.8667L21 26.2667L26.8667 27.9333L28.5333 21.9333L23.8 21.8667Z'
                        fill='#E27625'
                        stroke='#E27625'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3.4667 21.9333L5.1333 27.9333L11 26.2667L8.2 21.8667L3.4667 21.9333Z'
                        fill='#E27625'
                        stroke='#E27625'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10.6667 14.4667L9 17.0667L14.8 17.3333L14.6 11L10.6667 14.4667Z'
                        fill='#E27625'
                        stroke='#E27625'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21.3333 14.4667L17.3333 10.9333L17.2 17.3333L23 17.0667L21.3333 14.4667Z'
                        fill='#E27625'
                        stroke='#E27625'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M11 26.2667L14.4667 24.4667L11.5333 22L11 26.2667Z'
                        fill='#E27625'
                        stroke='#E27625'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M17.5333 24.4667L21 26.2667L20.4667 22L17.5333 24.4667Z'
                        fill='#E27625'
                        stroke='#E27625'
                        strokeWidth='0.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span className='mt-2 text-xs'>MetaMask</span>
                  </Label>
                </div>
                <div className='flex flex-col items-center'>
                  <RadioGroupItem
                    value='coinbase'
                    id='coinbase'
                    className='sr-only'
                  />
                  <Label
                    htmlFor='coinbase'
                    className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
                  >
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM13.5 12.5C12.9477 12.5 12.5 12.9477 12.5 13.5V18.5C12.5 19.0523 12.9477 19.5 13.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V13.5C19.5 12.9477 19.0523 12.5 18.5 12.5H13.5Z'
                        fill='#0052FF'
                      />
                    </svg>
                    <span className='mt-2 text-xs'>Coinbase</span>
                  </Label>
                </div>
                <div className='flex flex-col items-center'>
                  <RadioGroupItem
                    value='walletconnect'
                    id='walletconnect'
                    className='sr-only'
                  />
                  <Label
                    htmlFor='walletconnect'
                    className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
                  >
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.58818 11.8556C13.1293 8.31442 18.8707 8.31442 22.4118 11.8556L22.8232 12.267C23.0216 12.4654 23.0216 12.7875 22.8232 12.9859L21.2331 14.576C21.1339 14.6752 20.9729 14.6752 20.8737 14.576L20.3035 14.0058C17.8814 11.5837 14.1186 11.5837 11.6965 14.0058L11.0818 14.6205C10.9826 14.7197 10.8216 14.7197 10.7224 14.6205L9.13235 13.0304C8.93392 12.832 8.93392 12.5099 9.13235 12.3115L9.58818 11.8556ZM25.4584 14.9022L26.8675 16.3113C27.0659 16.5097 27.0659 16.8318 26.8675 17.0302L20.9802 22.9175C20.7818 23.1159 20.4597 23.1159 20.2613 22.9175L16.1749 18.8311C16.1253 18.7815 16.0448 18.7815 15.9952 18.8311L11.9088 22.9175C11.7104 23.1159 11.3883 23.1159 11.1899 22.9175L5.3025 17.0302C5.10407 16.8318 5.10407 16.5097 5.3025 16.3113L6.71161 14.9022C6.91004 14.7038 7.23213 14.7038 7.43056 14.9022L11.5169 18.9886C11.5665 19.0382 11.647 19.0382 11.6966 18.9886L15.783 14.9022C15.9814 14.7038 16.3035 14.7038 16.5019 14.9022L20.5883 18.9886C20.6379 19.0382 20.7184 19.0382 20.768 18.9886L24.8544 14.9022C25.0528 14.7038 25.3749 14.7038 25.4584 14.9022Z'
                        fill='#3B99FC'
                      />
                    </svg>
                    <span className='mt-2 text-xs'>WalletConnect</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <DialogFooter>
              <Button
                variant='outline'
                onClick={() => setDonationStep('amount')}
              >
                Back
              </Button>
              <Button
                className='hover:bg-blue-700'
                onClick={handleDonate}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Wallet className='mr-2 h-4 w-4' />
                    Connect & Donate
                  </>
                )}
              </Button>
            </DialogFooter>
          </>
        )}

        {donationStep === 'success' && (
          <>
            <DialogHeader>
              <DialogTitle className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5' />
                Donation Successful!
              </DialogTitle>
              <DialogDescription>
                Your donation has been securely processed and added to the
                blockchain.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='border p-4 rounded-lg space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Amount:</span>
                  <span className='font-bold'>{amount} ETH</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Transaction Hash:</span>
                  <a href='#' className='hover:underline'>
                    0x71c...9e3f
                  </a>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Status:</span>
                  <span className='font-medium'>Confirmed</span>
                </div>
              </div>

              <div className='text-center text-sm text-gray-500 space-y-2'>
                <p>
                  You can track the progress of this project and how your funds
                  are being used in real-time.
                </p>
                <p>Thank you for supporting this initiative!</p>
              </div>
            </div>
            <DialogFooter>
              <Button
                className='hover:bg-blue-700 w-full'
                onClick={handleClose}
              >
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
