import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CvContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  templateId: string;

  @Column('json')
  HeaderProfileInfo: {
    firstname : string;
    lastname : string;
    othername : string;
    fullname: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    city : string;
    country  : string;
    postalCode : string;
    dateOfBirth? : string;
    socialMedia: Array<{
        platform: string;
        link: string;
      }>;
  };

  @Column('json')
  ProfessionalSummary : {
    summary : string;
  }

  @Column('json')
  Education: Array<{
    institution: string;
    degree: string;
    fieldOfStudy: string;
    institutionWebsite? : string;
    startDate: string;
    endDate: string;
  }>;

  @Column('json')
  Experience: Array<{
    company: string;
    position: string;
    startDate: string;  
    endDate: string;  
    responsibilities: string[];
  }>;

  // Skills section
  @Column('json')
  Skills: Array<{
    skill : string;
    proficiency : string;
    level?: string;
  }>

  // Certifications section
  @Column('json')
  Certifications: Array<{
    name: string;
    issuingOrganization: string;
    issueDate: string;
    expirationDate?: string; 
    credentialId?: string;  
    summary? : string;
  }>;

  
  // Hobbies section
  @Column('json')
  Hobbies : Array<{
    hobby : string;
  }>

 
  // Reference section
 @Column('json')
    Reference: Array<{
    referenceName: string;
    contactPerson: string;
    contactPhone: string[];
    contactEmail?: string;
  }>;


  // Projects section
  @Column('json')
  Projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;

  // Languages spoken
  @Column('json')
  Languages: Array<{
    language: string;
    proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Native';
  }>;


  // Additional sections (e.g., volunteering, awards)
  @Column('json')
  AdditionalSections: Array<{
    sectionTitle: string;
    details: string;
  }>;



  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
