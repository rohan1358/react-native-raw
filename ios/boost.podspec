Pod::Spec.new do |spec|
  spec.name = 'boost'
  spec.version = '1.83.0'
  spec.license = { :type => 'Boost Software License', :file => "LICENSE_1_0.txt" }
  spec.homepage = 'http://www.boost.org'
  spec.summary = 'Boost provides free peer-reviewed portable C++ source libraries.'
  spec.authors = 'Rene Rivera'
  # Patched due to issue https://github.com/boostorg/boost/issues/843
  spec.source = { :http => 'https://sourceforge.net/projects/boost/files/boost/1.83.0/boost_1_83_0.tar.bz2',
                  :sha256 => '6478edfe2f3305127cffe8caf73ea0176c53769f4bf1585be237eb30798c3b8e' }

  # Pinning to the same version as React.podspec.
  spec.platforms = min_supported_versions
  spec.requires_arc = false

  spec.module_name = 'boost'
  spec.header_dir = 'boost'
  spec.preserve_path = 'boost'
end