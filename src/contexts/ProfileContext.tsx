'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileState {
  firstName: string;
  lastName: string;
  avatar: string;
  banner: string;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setAvatar: (url: string) => void;
  setBanner: (url: string) => void;
}

const ProfileContext = createContext<ProfileState | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [firstName, setFirstName] = useState('Melodif');
  const [lastName, setLastName] = useState('User');
  const [avatar, setAvatar] = useState('https://picsum.photos/seed/avatar/200');
  const [banner, setBanner] = useState('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop');

  return (
    <ProfileContext.Provider value={{ firstName, lastName, avatar, banner, setFirstName, setLastName, setAvatar, setBanner }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
