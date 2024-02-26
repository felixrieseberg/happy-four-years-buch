"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import React from "react";
import Image from "next/image";

export interface Message {
  body: string;
  author: string;
}

const Data: Array<Message> = [
  {
    body: "Buch, congrats on ~ four years ~ at Notion! I can only begin to imagine the changes you must have seen in that time. I'm thankful for your eye for detail, your meticulous attention to careful planning, and your willingness to help people around you with anything. I still feel like it's early days for ✨ Notion on macOS & Windows ✨ and I'm excited to see where we can take both the team and the app together. Here's to many more years of building something delightful!",
    author: "Felix Rieseberg",
  },
  {
    body: "Buch! I speak for many when I say that feel privileged to be on the same team as you. At this point I consider you a true Notion OG. I still remember when you showed me your long term plan for the Electron app and marveled at the care and foresight you put into it. If there was one thing I could change about this place that I physically can't, it would be to find some way to make every single new hire benefit from your mentorship. Here's to FOUR MORE YEARS!! of holding things down on the desktop app --- and let's go shopping soon!",
    author: "Carlo Francisco",
  },
  {
    body: "Hi Buch, I can't believe it's been four years already—here's to many more! I think you are one of the most reliable people I know, and I appreciate your consistent good humor and stalwart commitment to the Android app. :honkgoose:",
    author: "Slim",
  },
  {
    body: "Buch, congrats on the big 4.0 Notion-versary! I've always appreciated your calm demeanor and willingness to help out, whether that's doing what was needed, like jumping on Electron from Android, or sending an encouraging note and providing emotional support. Thank you for joining when you did, and for all you've done at Notion! P.S. I hope you'll resurrect your leatherworking hobby some day, I just dug out out my tools yesterday to make a leather deskpad!",
    author: "Alicia Liu",
  },
  {
    body: "Congrats on hitting your 4th Notionversary Buch! 🥳 Here's to hoping I can reach this monumental milestone someday too! It's been an absolute blast being on the same team as you, and getting to be mentored by you. Your guidance has already been instrumental during my onboarding process. I am beyond excited by what we're going to build together, especially in taking Desktop to the next level for our users. Thank you for making me feel at home, both on the team and during that awesome neighborhood tour of the Mission! Cheers to many years ahead!",
    author: "Alice Zhao",
  },
  {
    body: "Buch - congratulations on 4 years at Notion! Although we haven't worked closely together, your dedication to quality and craft is inspiring. You were one of my first interviews at Notion and gave me a great impression of what the engineering culture would be like here. Looking forward to seeing what else you'll accomplish at Notion, and hope we get to work together in the future! Cheers!",
    author: "Nick Gervasi",
  },
  {
    body: "Buch, congrats on your 4 year anniversary! Enjoyed our initial conversation and looking forward to collaborating closely with you more!",
    author: "Ji Pei",
  },
  {
    body: "Congrats Buch! 4 year is a big achievement! Thank you so much for always being so kind and helpful. We miss you on the mobile team, but I’m also so thankful that you are still looking out for us on the web infra team by sharing knowledge and updates to us. Looking forward to working with you more and learning more from you!",
    author: "Bao Lei",
  },
  {
    body: "Congrats Buch! Wow 4 years! Thanks for always bringing such an insightful perspective to our conversations and work. I love how considerate you are other’s emotions and you’re such a good listener. Looking forward to working with you more!",
    author: "Jeff Kwan",
  },
  {
    body: "Congratulations on 4 years, Buch! I’m so glad I’ve gotten to know you through climbing and heavy metal. :the_horns::skin-tone-2: I’m grateful we’re friends despite never having worked in the same office location. 🙂 Keep up with the impeccable style, and cheers to more years!",
    author: "Lauren Oliveri",
  },
  {
    body: "Happy 4 year Notion-versary Buch, this is such an incredible milestone! It's been awesome to partner and learn from you during my time here, it feels like not long ago you were helping me onboard — we really do miss you on the Mobile team. I love our random coffee chats and hallway conversations, thanks for always being thoughtful and kind! Wishing you many more years of incredible contributions and impact!",
    author: "Karn Saheb",
  },
  {
    body: "Congrats on reaching 4 years Buch! What a milestone! I really appreciate everything you’ve done for the desktop app and the web infra team over the past few years. I also appreciate your levelheaded attitude and advice that makes me feel grounded when everything feels hectic. Thanks for being a good listener and also for introducing me to music genres I wouldn’t have known about otherwise. Looking forward to working together for many more years!",
    author: "Ankit Sardesai",
  },
  {
    body: "buch!! i can’t believe it’s been 4 years already. you were my first friend at notion and i am pleased to observe that you are killing it; i hope to be as put-together as you someday. thanks for being my coffee run buddy, fellow music nerd, and designated screaming-into void. congrats on 4 years at notion, and here’s to many more!",
    author: "Christine Wang",
  },
  {
    body: "Buch! you must be the wisest Desktop engineer by far. I have appreciated getting to see your detailed knowledge of how the desktop (and mobile) apps interact with the other pieces of our system and look forward to seeing you continue to push things forward. (also thank you for draggable tabs that aren't lost after a restart)",
    author: "Sophie Alpert",
  },
  {
    body: "Happy 4 years Buch!!! It’s been a pleasure having you as a mentor on Notion Desktop. Thank you for holding the code and user experience to a high standard, and pushing me to do the same. I’m thankful for all the pairing sessions and check ins we’ve done, and for our boba run and climbing sessions so far!! Here’s to many more, and to building the best version on Notion desktop together!!!",
    author: "Anny Yang",
  },
  {
    body: "Congrats on 4 years, Buch! It's been great working with you. I appreciate your courage to take on new challenges, commitment, ownership, AND state-of-the-art desk setup! I'm eager to see how you continue to grow in the years to come.",
    author: "Fatemeh Alavizadeh",
  },
  {
    body: "Congrats on the big 4 years at Notion Labs, Inc 🙂 You’re thoughtful and introspective in comforting kind way. Talking with you always feels like walking around a glassy alpine lake on a cloudless day",
    author: "Jake Teton Landis",
  },
  {
    body: "Hi Buch, I'm so lucky to be on the same team as you and to have the chance to learn from you! Thank you for pushing me to be a better engineer during our pairing sessions. And thanks for the music and thrifting recommendations — your style is sick! Congrats on 4 years!!",
    author: "Henry Chiu",
  },
  {
    body: "Buch, can’t believe it has been 4 years! I always had a lot of fun working with you, and have been learning a lot from your humbleness and thoroughness. I’m sure there’s a ton of things we could do, in the desktop area, and everywhere else, so let’s make it another 4! 😉",
    author: "Zeno Wu",
  },
  {
    body: "Buch - Thank you for being such a kind and welcoming presence on the Web Infrastructure team! It's been awesome getting to know you. I always appreciate your thoughtful explanations and how you acknowledge every question, no matter how simple, with gentle curiosity. Congratulations on 4 years!",
    author: "Maja Wichrowska"
  },
  {
    body: "Congrats on 4 years Buch!! Having you as a coworker is great - I appreciate your help at work and love chatting with you about the best places to eat, shop, and concerts to see 😄",
    author: "Kiran Pandit"
  },
  {
    body: "Congratulations on 4 years! It feels like it's just been yesterday that we've been trying to deprecate react native 😅 It was fun to see you help us evolve different platforms and run towards challenges! Notion wouldn't be the same without you (and we would have Tabs on desktop too 😎)",
    author: "Arty Vohmincevs"
  }
];

export function Dropbox() {
  const [message, setMessage] = React.useState<Message | null>(null);
  const [search, setSearch] = React.useState<string>("");

  return (
    <div className="bg-[#fff] min-h-screen">
      <Dialog
        open={!!message}
        onOpenChange={(open) => {
          if (!open) {
            setMessage(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{message?.author}.txt</DialogTitle>
            <DialogDescription className="font-tw">{message?.body}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="flex min-h-screen">
        <nav className="w-60 bg-[#F7F5F2] p-6 border-r-[1px] border-[#D4D2D0]">
          <Image
            className="mb-5"
            src="/buchbox.png"
            width={41}
            height={43}
            alt="Buchbox"
          />
          <ul className="space-y-6">
            <li className="flex items-center cursor-not-allowed	 space-x-2 text-sm font-medium text-subtle">
              <FolderIcon className="h-4 w-4" />
              <span>All files</span>
            </li>
            <li className="flex items-center cursor-not-allowed	 space-x-2 text-sm font-medium text-subtle">
              <ImageIcon className="h-4 w-4" />
              <span>Photos</span>
            </li>
            <li className="flex items-center cursor-not-allowed	 space-x-2 text-sm font-medium text-subtle">
              <UsersIcon className="h-4 w-4" />
              <span>Shared</span>
            </li>
            <li className="flex items-center cursor-not-allowed	 space-x-2 text-sm font-medium text-subtle">
              <FileSignatureIcon className="h-4 w-4" />
              <span>Signatures</span>
            </li>
            <li className="flex items-center cursor-not-allowed	 space-x-2 text-sm font-medium text-subtle">
              <FileIcon className="h-4 w-4" />
              <span>File requests</span>
            </li>
            <li className="flex items-center cursor-not-allowed	 space-x-2 text-sm font-medium text-subtle">
              <TrashIcon className="h-4 w-4" />
              <span>Deleted files</span>
            </li>
          </ul>
        </nav>
        <div className="flex-1 p-6">
          <div className="flex justify-between mb-5">
            <div className="flex space-x-4 flex-grow mr-20">
              <Input
                className="w-[100%] rounded-none b-[#DADADA]"
                placeholder="Search"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <UsersIcon className="h-6 w-6 text-subtle" />
              <SettingsIcon className="h-6 w-6 text-subtle" />
              <SignalIcon className="h-6 w-6 text-subtle" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <BigButton className="bg-[#285FF5] hover:bg-[#1D4CC0] text-white">
                Create
              </BigButton>
              <BigButton>Upload</BigButton>
              <BigButton>Create folder</BigButton>
              <BigButton>Record</BigButton>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#212b36]">
                All files
              </h2>
              <div className="flex items-center space-x-1">
                <InfoIcon className="h-4 w-4 text-[#1A1818]" />
                <span className="text-sm text-[#1A1818]">
                  Suggested from your activity
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Button className="text-[#1A1818]" variant="ghost">
                  Recents
                </Button>
                <Button className="text-[#1A1818]" variant="ghost">
                  Starred
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px] text-[#1A1818]">
                      Name
                    </TableHead>
                    <TableHead className="text-[#1A1818]">
                      Who can access
                    </TableHead>
                    <TableHead className="text-[#1A1818]">Modified</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Data.filter((item) => {
                    return (
                      !search ||
                      item.author.toLowerCase().includes(search.toLowerCase())
                    );
                  }).map((message, index) => (
                    <MessageTableRow
                      onClick={setMessage}
                      key={index}
                      message={message}
                    />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigButton({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      {...props}
      className={`bg-[#fff] hover:bg-[#F7F5F2] text-subtle border-[#DBDBDB] border-[1px] rounded-none h-[76px] w-[140px] items-end justify-items-start ${props.className || ""}`}
    >
      {children}
    </Button>
  );
}

function MessageTableRow({
  message,
  onClick,
}: {
  message: Message;
  onClick: (message: Message) => void;
}) {
  const members = Math.round(message.body.split(" ").length / 10);

  return (
    <TableRow
      className="cursor-pointer h-[39px]"
      onClick={() => onClick(message)}
    >
      <TableCell className="font-medium inline-flex">
        <Image src="/text.png" width={40} height={40} alt="Text" />
        {message.author}.txt
      </TableCell>
      <TableCell>{members} members</TableCell>
      <TableCell>--</TableCell>
    </TableRow>
  );
}

function FolderIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}

function ImageIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function UsersIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function FileSignatureIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5" />
      <path d="M8 18h1" />
      <path d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z" />
    </svg>
  );
}

function FileIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function TrashIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function SettingsIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SignalIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

function InfoIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
