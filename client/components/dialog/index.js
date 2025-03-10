// import { X } from "@tamagui/lucide-icons";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  TooltipSimple,
  Unspaced,
  XStack,
  YStack,
} from 'tamagui';

import { SelectDemoItem } from '../select/index.js';

export function DialogDemo() {
  // return null
  return <DialogInstance />;
}

function DialogInstance() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog
      modal
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <Dialog.Trigger asChild>
        <Button>Show Dialog</Button>
      </Dialog.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap>
            <Adapt.Contents />
          </Sheet.Frame>

          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap
        >
          <Dialog.Title>Edit profile</Dialog.Title>

          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>

          <Fieldset gap="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="name">
              Name
            </Label>

            <Input flex={1} id="name" defaultValue="Nate Wienert" />
          </Fieldset>

          <Fieldset gap="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="username">
              <TooltipSimple
                label="Pick your favorite"
                placement="bottom-start"
              >
                <Paragraph>Food</Paragraph>
              </TooltipSimple>
            </Label>

            <SelectDemoItem />
          </Fieldset>
          <XStack alignSelf="flex-end" gap>
            <DialogInstance />
            <Dialog.Close displayWhenAdapted asChild>
              <Button theme="alt1" aria-label="Close">
                Save changes
              </Button>
            </Dialog.Close>
          </XStack>
          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={
                  <MaterialCommunityIcons
                    name="close"
                    size={24}
                    color="black"
                  />
                }
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
