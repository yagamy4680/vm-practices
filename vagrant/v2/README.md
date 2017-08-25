
## CHANGES

- Add `vm_start` and `vm_stop` scripts
- Be able to get the mac address of public ethernet interface

## COMMANDS


Start a vm with public ethernet interface (same subnet as Mac OS X host environment), and 
download `yagamy/node-web-app2` Docker image

```text
$ ./vm_stop && ./vm_start
```

Above command performs following steps:

- Start a vm with public ethernet interface (same subnet as Mac OS X host environment)
- Pull `yagamy/node-web-app2` Docker image from cloud after vm ready
- Run `yagamy/node-web-app2` as daemon, listening on port 8080


```text
vagrant destroy -f
==> default: Forcing shutdown of VM...
==> default: Destroying VM and associated drives...
vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Importing base box 'ailispaw/barge'...
==> default: Matching MAC address for NAT networking...
==> default: Checking if box 'ailispaw/barge' is up to date...
==> default: Setting the name of the VM: vm2_default_1503594842656_29357
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
    default: Adapter 2: bridged
==> default: Forwarding ports...
    default: 2375 (guest) => 2375 (host) (adapter 1)
    default: 22 (guest) => 2222 (host) (adapter 1)
==> default: Running 'pre-boot' VM customizations...
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2222
    default: SSH username: bargee
    default: SSH auth method: private key
    default:
    default: Vagrant insecure key detected. Vagrant will automatically replace
    default: this with a newly generated keypair for better security.
    default:
    default: Inserting generated public key within guest...
    default: Removing insecure key from the guest if it's present...
    default: Key inserted! Disconnecting and reconnecting using new SSH key...
==> default: Machine booted and ready!
[default] GuestAdditions 5.1.26 running --- OK.
==> default: Setting hostname...
==> default: Configuring and enabling network interfaces...
==> default: Mounting shared folders...
    default: /tmp/vagrant-cache => /Users/yagamy/Works/workspaces/t2t/conscious/test/vagrant/vm2/.vagrant/machines/default/cache
==> default: Configuring cache buckets...
==> default: Running provisioner: shell...
    default: Running: inline script
==> default: Unable to find image 'yagamy/node-web-app2:latest' locally
==> default: latest: Pulling from yagamy/node-web-app2
==> default: 90f4dba627d6: Pulling fs layer
==> default: 302ce48cc185: Pulling fs layer
==> default: e1c17ba3935d: Pulling fs layer
==> default: db17a9cd21ec: Pulling fs layer
==> default: f918a189159d: Pulling fs layer
==> default: 0c9a7b59e234: Pulling fs layer
==> default: e78f48a4033b: Pulling fs layer
==> default: db17a9cd21ec: Waiting
==> default: f918a189159d: Waiting
==> default: 0c9a7b59e234: Waiting
==> default: e78f48a4033b: Waiting
==> default: e1c17ba3935d: Verifying Checksum
==> default: e1c17ba3935d: Download complete
==> default: 90f4dba627d6: Verifying Checksum
==> default: 90f4dba627d6: Download complete
==> default: 90f4dba627d6: Pull complete
==> default: 90f4dba627d6: Pull complete
==> default: db17a9cd21ec: Verifying Checksum
==> default: db17a9cd21ec: Download complete
==> default: f918a189159d: Verifying Checksum
==> default: f918a189159d: Download complete
==> default: 302ce48cc185: Verifying Checksum
==> default: 302ce48cc185: Download complete
==> default: 302ce48cc185: Pull complete
==> default: 302ce48cc185: Pull complete
==> default: e1c17ba3935d: Pull complete
==> default: e1c17ba3935d: Pull complete
==> default: e78f48a4033b: Verifying Checksum
==> default: e78f48a4033b: Download complete
==> default: db17a9cd21ec: Pull complete
==> default: db17a9cd21ec: Pull complete
==> default: f918a189159d: Pull complete
==> default: f918a189159d: Pull complete
==> default: 0c9a7b59e234: Verifying Checksum
==> default: 0c9a7b59e234: Download complete
==> default: 0c9a7b59e234: Pull complete
==> default: 0c9a7b59e234: Pull complete
==> default: e78f48a4033b: Pull complete
==> default: e78f48a4033b: Pull complete
==> default: Digest: sha256:7b029844823fc63c5712d23a64b31f7d1cc741e48fa2144e20a58a2da9f6d99a
==> default: Status: Downloaded newer image for yagamy/node-web-app2:latest
==> default: f30c571e6b0ef35f270f21810d0c5e504ff96130f184a6076a2bf057da4c8b3e
==> default: Configuring cache buckets...
get vm's public ip...
Connection to 127.0.0.1 closed.
public ethernet interface (eth1) in Virtualbox:
  ip : "10.90.0.107"
  mac: "0a:0c:89:00:ff:ff"

you can run following commands for references:
  http http://10.90.0.107:8080/interfaces
  http http://10.90.0.107:8080/hostname
  vagrant ssh -c 'ifconfig -a'
```


## REFERENCES

- https://app.vagrantup.com/ailispaw/boxes/barge
