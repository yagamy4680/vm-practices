## CHANGES

- Run 2 virtual machines, both have public network interface (same subnet as Mac OS X host environment)


## COMMANDS

```text
./vm_stop && ./vm_start
```

Above command tries to launch 2 virtual machines `echonet1` and `echonet2`.


Here are outputs:

```text
$  ./vm_stop && ./vm_start
vagrant destroy -f
==> echonet2: Destroying VM and associated drives...
==> echonet1: Destroying VM and associated drives...
vagrant up echonet1
Bringing machine 'echonet1' up with 'virtualbox' provider...
==> echonet1: Importing base box 'ailispaw/barge'...
==> echonet1: Matching MAC address for NAT networking...
==> echonet1: Checking if box 'ailispaw/barge' is up to date...
==> echonet1: Setting the name of the VM: v3_echonet1_1503596009717_79059
==> echonet1: Clearing any previously set network interfaces...
==> echonet1: Preparing network interfaces based on configuration...
    echonet1: Adapter 1: nat
    echonet1: Adapter 2: bridged
==> echonet1: Forwarding ports...
    echonet1: 2375 (guest) => 2375 (host) (adapter 1)
    echonet1: 22 (guest) => 2222 (host) (adapter 1)
==> echonet1: Running 'pre-boot' VM customizations...
==> echonet1: Booting VM...
==> echonet1: Waiting for machine to boot. This may take a few minutes...
    echonet1: SSH address: 127.0.0.1:2222
    echonet1: SSH username: bargee
    echonet1: SSH auth method: private key
    echonet1:
    echonet1: Vagrant insecure key detected. Vagrant will automatically replace
    echonet1: this with a newly generated keypair for better security.
    echonet1:
    echonet1: Inserting generated public key within guest...
    echonet1: Removing insecure key from the guest if it's present...
    echonet1: Key inserted! Disconnecting and reconnecting using new SSH key...
==> echonet1: Machine booted and ready!
[echonet1] GuestAdditions 5.1.26 running --- OK.
==> echonet1: Setting hostname...
==> echonet1: Configuring and enabling network interfaces...
==> echonet1: Mounting shared folders...
    echonet1: /tmp/vagrant-cache => /Users/yagamy/Works/workspaces/t2t/conscious/test/vagrant/v3/.vagrant/machines/echonet1/cache
==> echonet1: Configuring cache buckets...
==> echonet1: Running provisioner: shell...
    echonet1: Running: inline script
==> echonet1: Unable to find image 'yagamy/node-web-app2:latest' locally
==> echonet1: latest: Pulling from yagamy/node-web-app2
==> echonet1: 90f4dba627d6: Pulling fs layer
==> echonet1: 302ce48cc185: Pulling fs layer
==> echonet1: e1c17ba3935d: Pulling fs layer
==> echonet1: db17a9cd21ec: Pulling fs layer
==> echonet1: f918a189159d: Pulling fs layer
==> echonet1: 0c9a7b59e234: Pulling fs layer
==> echonet1: e78f48a4033b: Pulling fs layer
==> echonet1: db17a9cd21ec: Waiting
==> echonet1: f918a189159d: Waiting
==> echonet1: 0c9a7b59e234: Waiting
==> echonet1: e78f48a4033b: Waiting
==> echonet1: e1c17ba3935d: Verifying Checksum
==> echonet1: e1c17ba3935d: Download complete
==> echonet1: db17a9cd21ec: Verifying Checksum
==> echonet1: db17a9cd21ec: Download complete
==> echonet1: 302ce48cc185:
==> echonet1: Verifying Checksum
==> echonet1: 302ce48cc185:
==> echonet1: Download complete
==> echonet1: 90f4dba627d6: Verifying Checksum
==> echonet1: 90f4dba627d6: Download complete
==> echonet1: 90f4dba627d6: Pull complete
==> echonet1: 90f4dba627d6: Pull complete
==> echonet1: f918a189159d: Verifying Checksum
==> echonet1: f918a189159d: Download complete
==> echonet1: 0c9a7b59e234: Verifying Checksum
==> echonet1: 0c9a7b59e234: Download complete
==> echonet1: 302ce48cc185: Pull complete
==> echonet1: 302ce48cc185: Pull complete
==> echonet1: e78f48a4033b: Verifying Checksum
==> echonet1: e78f48a4033b: Download complete
==> echonet1: e1c17ba3935d: Pull complete
==> echonet1: e1c17ba3935d: Pull complete
==> echonet1: db17a9cd21ec: Pull complete
==> echonet1: db17a9cd21ec: Pull complete
==> echonet1: f918a189159d: Pull complete
==> echonet1: f918a189159d: Pull complete
==> echonet1: 0c9a7b59e234: Pull complete
==> echonet1: 0c9a7b59e234: Pull complete
==> echonet1: e78f48a4033b: Pull complete
==> echonet1: e78f48a4033b: Pull complete
==> echonet1: Digest: sha256:7b029844823fc63c5712d23a64b31f7d1cc741e48fa2144e20a58a2da9f6d99a
==> echonet1: Status: Downloaded newer image for yagamy/node-web-app2:latest
==> echonet1: f88f905712c50738da58db216c5eed4204f6ad4b0cd4266bdd9f53c142fc990a
==> echonet1: Configuring cache buckets...
get vm's public ip...
Connection to 127.0.0.1 closed.
public ethernet interface (eth1) in Virtualbox:
  ip : "10.90.0.109"
  mac: "0a:0c:89:ff:00:01"

you can run following commands for references:
  http http://10.90.0.109:8080/interfaces
  http http://10.90.0.109:8080/hostname
  vagrant ssh -c 'ifconfig -a'
vagrant up echonet2
Bringing machine 'echonet2' up with 'virtualbox' provider...
==> echonet2: Importing base box 'ailispaw/barge'...
==> echonet2: Matching MAC address for NAT networking...
==> echonet2: Checking if box 'ailispaw/barge' is up to date...
==> echonet2: Setting the name of the VM: v3_echonet2_1503596043972_6961
==> echonet2: Fixed port collision for 2375 => 2375. Now on port 2200.
==> echonet2: Fixed port collision for 22 => 2222. Now on port 2201.
==> echonet2: Clearing any previously set network interfaces...
==> echonet2: Preparing network interfaces based on configuration...
    echonet2: Adapter 1: nat
    echonet2: Adapter 2: bridged
==> echonet2: Forwarding ports...
    echonet2: 2375 (guest) => 2200 (host) (adapter 1)
    echonet2: 22 (guest) => 2201 (host) (adapter 1)
==> echonet2: Running 'pre-boot' VM customizations...
  1 ## CHANGES
==> echonet2: Booting VM...
==> echonet2: Waiting for machine to boot. This may take a few minutes...
    echonet2: SSH address: 127.0.0.1:2201
    echonet2: SSH username: bargee
    echonet2: SSH auth method: private key
    echonet2:
    echonet2: Vagrant insecure key detected. Vagrant will automatically replace
    echonet2: this with a newly generated keypair for better security.
    echonet2:
    echonet2: Inserting generated public key within guest...
    echonet2: Removing insecure key from the guest if it's present...
    echonet2: Key inserted! Disconnecting and reconnecting using new SSH key...
==> echonet2: Machine booted and ready!
[echonet2] GuestAdditions 5.1.26 running --- OK.
==> echonet2: Setting hostname...
==> echonet2: Configuring and enabling network interfaces...
==> echonet2: Mounting shared folders...
    echonet2: /tmp/vagrant-cache => /Users/yagamy/Works/workspaces/t2t/conscious/test/vagrant/v3/.vagrant/machines/echonet2/cache
==> echonet2: Configuring cache buckets...
==> echonet2: Running provisioner: shell...
    echonet2: Running: inline script
==> echonet2: Unable to find image 'yagamy/node-web-app2:latest' locally
==> echonet2: latest: Pulling from yagamy/node-web-app2
==> echonet2: 90f4dba627d6: Pulling fs layer
==> echonet2: 302ce48cc185: Pulling fs layer
==> echonet2: e1c17ba3935d: Pulling fs layer
==> echonet2: db17a9cd21ec: Pulling fs layer
==> echonet2: f918a189159d: Pulling fs layer
==> echonet2: 0c9a7b59e234: Pulling fs layer
==> echonet2: e78f48a4033b: Pulling fs layer
==> echonet2: db17a9cd21ec: Waiting
==> echonet2: f918a189159d: Waiting
==> echonet2: 0c9a7b59e234: Waiting
==> echonet2: e78f48a4033b: Waiting
==> echonet2: 90f4dba627d6: Verifying Checksum
==> echonet2: 90f4dba627d6: Download complete
==> echonet2: e1c17ba3935d: Verifying Checksum
==> echonet2: e1c17ba3935d: Download complete
==> echonet2: 90f4dba627d6: Pull complete
==> echonet2: 90f4dba627d6: Pull complete
==> echonet2: db17a9cd21ec: Verifying Checksum
==> echonet2: db17a9cd21ec: Download complete
==> echonet2: f918a189159d: Verifying Checksum
==> echonet2: f918a189159d: Download complete
==> echonet2: 302ce48cc185: Verifying Checksum
==> echonet2: 302ce48cc185: Download complete
==> echonet2: 302ce48cc185: Pull complete
==> echonet2: 302ce48cc185: Pull complete
==> echonet2: e78f48a4033b: Verifying Checksum
==> echonet2: e78f48a4033b: Download complete
==> echonet2: 0c9a7b59e234: Verifying Checksum
==> echonet2: 0c9a7b59e234: Download complete
==> echonet2: e1c17ba3935d: Pull complete
==> echonet2: e1c17ba3935d: Pull complete
==> echonet2: db17a9cd21ec: Pull complete
==> echonet2: db17a9cd21ec: Pull complete
==> echonet2: f918a189159d: Pull complete
==> echonet2: f918a189159d: Pull complete
==> echonet2: 0c9a7b59e234: Pull complete
==> echonet2: 0c9a7b59e234: Pull complete
==> echonet2: e78f48a4033b: Pull complete
==> echonet2: e78f48a4033b: Pull complete
==> echonet2: Digest: sha256:7b029844823fc63c5712d23a64b31f7d1cc741e48fa2144e20a58a2da9f6d99a
==> echonet2: Status: Downloaded newer image for yagamy/node-web-app2:latest
==> echonet2: d9cd95b8824d981b239f0bd6a5b8dd10bfad9e6ed8d57c6fe15c1b7350bb5d2b
==> echonet2: Configuring cache buckets...
get vm's public ip...
Connection to 127.0.0.1 closed.
public ethernet interface (eth1) in Virtualbox:
  ip : "10.90.0.111"
  mac: "0a:0c:89:ff:00:02"

you can run following commands for references:
  http http://10.90.0.111:8080/interfaces
  http http://10.90.0.111:8080/hostname
  vagrant ssh -c 'ifconfig -a'
```

The vm `echonet1` has a public interface `eth1`, which has mac address `0A:0C:89:FF:00:01`, ip `10.90.0.109` (same subnet as my Mac OS X `10.90.0.110`).

Another vm `echonet2` has a public interface `eth1`, which has mac address `0A:0C:89:FF:00:02`, ip `10.90.0.111` (same subnet as my Mac OS X `10.90.0.110`).