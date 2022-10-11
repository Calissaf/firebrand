# Module 2

## Content: Azure architecture and services

* Azure architectural componenets
* Compute and networking
* Storage
* Identity, Access and Security

## Azure

* account types:
  * azure standard account
  * azure free account
  * azure free student account
  * microsoft learn sandbox

## Azure architectural componenets

* regions
  * they are made up of one or more datacenters in close proximity
  * provide flexibility and scale to reduce customer latency
  * preservse data residency with a comprehensive compliance offering

* avalibility zones
  * provide protection against downtime due to datacenter failure
  * physically seperate datacenters within the same region
    * so it theres an earthquake in one area your business won't go down due to datacenter fsailure as it's rerouted through to another working datacenter
  * each datacenter is equipped with independent power, cooling and networking
  * connected through private fibre optic networks

* region pairs
  * at least 300 miles of separation between region pairs
    * to ensure natural disaters won't have affected both regions
  * automatice replication for some services
  * prioritized region recovery in the event of an outage
  * updates are rolled out sequetially to minimize downtime
    * if possible both regions in a pair won't be being updated at the same time so your business won't go down due to region outage

* Azure sovereign regionn
  * China
    * China East and China East 2 are the only regions in China and they are restricted to chinese government use only noone else can access them
  * US

* Resources
  * azure resources are components like storage,virtual macines and networks that re avalible to build cloud solutions
    * virtual machines
    * storage accounts
    * virtual networks
    * app services
    * SQL databases
    * functions
      * allow you to run code without renting any hardware

* Resource groups
  * is a container to manage and aggregate resources in a single unit
    * resources can exist only one resouce group
    * resources can exist in different regions
    * resources can be moved to different resource groups
    * applications can utilise multiple resource groups

* azure subscriptions
  * provides you with authenticates and authorized access to azure accounts
    * billing boundary: generate seperate billing reports and invoives for each subscription
      * can group different departments like dev ops or devs into different subscriptions so you can see how much each department are spending

* Management groups
  * can inlude multiple azure subscirptions
  * subscriptions inherit conditions applied to the management group
  * 10,000 management groups can be supported in a single directory

* Azure compute services
  * azure compute is an on-demand computing service that provides computing resources such as disks, processors, memory, networking and operating systems
  * broken down into:
    * virtual machines
      * software emulation of physical computers
        * including virtual processor, memory, storage and networking
        * IaaS offering that provides total control and customization instantly
    * app services
    * container instances
    * azure kubernetes services (AKS)
    * azure virtual desktop

* Virtual machine (VM) scale sets
  * scale sets provide a load-balanced oppurtunity to automatically scale resources
    * scale out when resources need increasing
    * scale in when resources are no longer being used

* VM avalibility sets
  * have different fault domains that contain different number of VMs inside them

* Azure Virtual desktop
  * is a desktop and app virtulization that runs in the cloud
    * can create a full desktop virtulization environment without having to run additional gateway servers
    * reduce risk of resource being left behind
    * true multi-session deployments

* Azure container services
  * azure containers are a lightweight...

* Azure functions
  * event based code running your service and not the underlying infrastructure

* comparing azure compute options
  * virtual machines
    * cloud based server that supports either windows or linux environments
    * used for lift and shift migrations to the cloud
    * complete operating system package including the host operating system
  * virtual desktop
    * provides a cloud

* azure app services
  * a fully managed platform to build, deploy and scale web apps and APIs quickly
    * works with .NET . NET core, Node.js, Java, Python or php
    * Paas offering with enterprise grade performance securtiy and compliance requirements
  * its pay-as-you-go you only pay for the resourcing you need

* azure networking services
  * azure virtual network (VNet)
    * enables azure resources to communicate with each other, the internet and on-premises networks
  * virtual private network gateway (VPN)
    * used to send encrypted traffic between an Azure virtual network and an on-premises location over the public internet
    * protects the information being sent between user and on-premises site through a encrypted tunnel
    * note: don't need to use a VON when you're on the premsis as your directly connected and not being divereted through the internet

* Storage accounts
  * must have a globally unique name
  * provide over-the-internet access
  * ...

* Storage redundancy
  * Locally-redundant-storage
    * deployed in a single datacenter in the primary region
    * durability 11 nines
  * Zone-redundant-storage
    * ...
  * Geo-redundant-storage
  * Geo-zone-redundant-storage

* Note:
  * more nines you have the closer to 100% durability
    * i.e. 11 nines = 99.999999999%
    * its the number of nines after the decimal place

* Storage service public endpoints
  * points and storage service

* Azure storage access tiers
  * Hot
    * optimized for storing data that is accessed frequently
  * Cool
    * optimized for storing data that is infrequently accessed and stored for at least 30 days
  * Archive
    * ...

* azure migrate
  * unified migration platform
  * range of integrated and standalone tools
  * assessment and migration
  * helps you move your workload from the office(on premises) to the cloud

* azure data box
  * store up to 80TB of data
  * move your disaster recovery backups to azure
  * protect your data in a rugged case

* file management options
  * Azcopy
  * Azure storage explorer
  * Azure file sync

## Identity, access and security

* azure active directory (ADD)
  * microsoft azure's cloud based identity and acces management service
    * authentication (employees sign in to access resources)
    * Single sign on (SSO)
      * only have to sign in once per session and you can access all the businesses different applicatoions that would otherwise need to have different sign ons
    * application manageent
    * business to business (B2B)
    * business to customer (B2C) identity services
    * device management

* authetication vs authorization
  * authentication
    * identifies the person or service seeking access to a resource
      * are you allowed to access the platform
    * requests legitimate access credentials
    * basis for creating secure identity and access control principles
  * authorization
    * determines an authenticated persons or services level of access
      * what are you allowed to do
    * defines which data they can access and what they can do with it

* azure multi-factor authetication (MFA)
  * provides additional security for your identities by requiring 2 or more elements for full authentication
  * combines 2 or more of the below:
    * something you know
      * your password
    * something you have
      * access key
    * something you are
      * retina scan

* external identities business to business (B2B)
  * fedration services that allows to companies that interact often to trusted sign ons

* conditional access
  * used by azure active directory to bring signals together, to make decisions and enforce organizational policies
    * user or group membership
    * IP location
    * device
    * application
    * risk detection
  * i.e. you can only access the service from certain IP locations

* defense in-depth (not azure specific - just general best practice)
  * a layered approach to securing computer systems
  * provides multiple levels of protection
  * attacks against one layer are isolated from subsequent layers
    * if one layers fails all of the other layers still remain standing
  * can have ingress and engress protection
    * ingress: incoming i.e. someone trying to access a file
    * engress: outgoing i.e. someone trying to remove the file

* microsoft defender for cloud
  * defender for cloud is a monitoring service that provides threat protection across both azure and on-premises attacks
  * ..
