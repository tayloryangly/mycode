#<center>Contos7更换yum源</center>
###1、清华大学yum源
>备份 CentOS-Base.repo

    mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
>写入 CentOS-Base.repo

    vi /etc/yum.repos.d/CentOS-Base.repo
>按i进入编辑模式，写入以下内容

    # CentOS-Base.repo
    #
    # The mirror system uses the connecting IP address of the client and the
    # update status of each mirror to pick mirrors that are updated to and
    # geographically close to the client.  You should use this for CentOS updates
    # unless you are manually picking other mirrors.
    #
    # If the mirrorlist= does not work for you, as a fall back you can try the
    # remarked out baseurl= line instead.
    #
    #
    
    [base]
    name=CentOS-$releasever - Base
    baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/os/$basearch/
    #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
    gpgcheck=1
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
    
    #released updates
    [updates]
    name=CentOS-$releasever - Updates
    baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/updates/$basearch/
    #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates
    gpgcheck=1
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
    
    #additional packages that may be useful
    [extras]
    name=CentOS-$releasever - Extras
    baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/extras/$basearch/
    #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras
    gpgcheck=1
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
    
    #additional packages that extend functionality of existing packages
    [centosplus]
    name=CentOS-$releasever - Plus
    baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/centosplus/$basearch/
    #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus
    gpgcheck=1
    enabled=0
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
>按ESC退出编辑模式，输入 “:wq” 保存并且退出vi模式  


>清理yum缓存

    yum clean all

>更新软件包缓存

    yum makecache
###2、阿里yum源